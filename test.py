import os

# Set the path to the folder containing the images
folder_path = 'sauceimages/'

# Loop through all the files in the folder
image_files = []
for filename in os.listdir(folder_path):
    # Check if the file is an image (based on extension)
    if filename.endswith('.png') or filename.endswith('.jpg') or filename.endswith('.jpeg'):
        image_files.append(filename)

# Print the list of image files
print("Total images found:", len(image_files))
for image in image_files:
    print(image)