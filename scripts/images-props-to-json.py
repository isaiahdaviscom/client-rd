import os
import json
from PIL import Image

# Constants
IMAGE_EXTENSIONS = ('.jpg', '.png', '.webp')
EXCLUDE_FOLDERS = {'.next', 'node_modules'}

def get_image_dimensions(file_path):
    try:
        with Image.open(file_path) as img:
            width, height = img.size
            return {'width': width, 'height': height}
    except Exception as e:
        print(f"Error getting dimensions for {file_path}: {str(e)}")
        return None

def scan_directory(directory_path):
    dimensions_data = {}

    try:
        for root, dirs, files in os.walk(directory_path, topdown=True):
            dirs[:] = [d for d in dirs if d not in EXCLUDE_FOLDERS]

            for file in files:
                if file.lower().endswith(IMAGE_EXTENSIONS):
                    file_path = os.path.join(root, file)
                    dimensions = get_image_dimensions(file_path)

                    if dimensions:
                        dimensions_data[file_path] = dimensions

        return dimensions_data
    except Exception as e:
        print(f"Error scanning directory {directory_path}: {str(e)}")
        return None

def main():
    # Dynamically get the project directory based on script location
    project_directory = os.path.abspath(os.path.join(os.path.dirname(__file__), '../'))

    # Construct the output file path using os.path.join
    output_file_path = os.path.join(project_directory, 'scripts', 'generated', 'images.json')

    dimensions_data = scan_directory(project_directory)

    if dimensions_data:
        # Check if the output file already exists
        if not os.path.exists(output_file_path):
            os.makedirs(os.path.dirname(output_file_path), exist_ok=True)  # Create intermediate directories if necessary
            with open(output_file_path, 'w') as json_file:
                json.dump(dimensions_data, json_file, indent=2)
            print(f"Image dimensions saved to {output_file_path}")
        else:
            print(f"Output file {output_file_path} already exists. Not overwriting.")

if __name__ == "__main__":
    main()
