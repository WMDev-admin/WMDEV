import os
from PIL import Image

def convert_webp_to_jpg(input_dir, output_dir):
    # Create the output directory if it doesn't exist
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # Get a list of all files in the input directory
    files = os.listdir(input_dir)

    # Filter out only the WebP files
    webp_files = [f for f in files if f.lower().endswith('.webp')]

    # Convert each WebP file to JPEG
    for webp_file in webp_files:
        # Open the WebP image
        with Image.open(os.path.join(input_dir, webp_file)) as img:
            # Generate the output file path with .jpg extension
            output_file = os.path.splitext(webp_file)[0] + '.jpg'
            # Save the image in JPEG format to the output directory
            img.convert('RGB').save(os.path.join(output_dir, output_file), 'JPEG')

if __name__ == "__main__":
    # Specify the input directory containing WebP files
    input_directory = './webp/'
    # Specify the output directory for JPEG files
    output_directory = './images/'

    # Convert WebP to JPEG
    convert_webp_to_jpg(input_directory, output_directory)
