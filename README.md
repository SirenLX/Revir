# Revir - Online Virtual Tour editor
revir is an online virtual tour editor made for Imme VR.

# Install Instructions
- Download USBWebserver v8.6
- Clone/Download zip of this repo
- Unzip into USBWebserver/root folder
- Launch USBWebserver
- Localhost

OR

- Open index.php in web browser of choice
- PHP files would not work

# Features
- Upload panoramic images into database
- Add/Edit/Remove hotspots
- Add watermark
- Add/Edit/Remove virtual tours
- View virtual tours

# Task List
- ## Login/Registration
  - ### Security
    - Max retry limit
    - Strong password requirement (Upper, Lower, Symbols, Numbers)
    - Password/Username Storage
  - ### Accessibility
    - Multiple login locations
    - Social Account OAuth
- ## Virtual tour editing
  - ### Upload images
    - Panoramic images
    - Branding/watermarks
    - Node icons
  - ### Hotspot/Node editing
    - Create node
    - Rename node
    - Link nodes
    - Add node icon
    - Add node image
  - ### Gallery
    - Load from database
    - Preview images
    - Add images
    - Remove images
  - ### Photo editing
    - Brightness
    - Contrast
    - Temperature
    - Saturation
    - Hue
  - ### Node tree
    - Node link information
    - Hover information
    - Optional floor plan
  - ### Save virtual tours
    - .VT (.json in disguise)
    - Node information
    - Image path information
