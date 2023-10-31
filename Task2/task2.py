import hashlib
import os

# Define the directory to be checked
directory_to_check = "E:\CodeAlpha\Task2"

# Database containing trusted hashes of system files
trusted_database = {
    "task2.txt": "f7ff9e8b7bb2e09b70935a5d785e0cc5d9d0abf0",
    "random.txt": "5eb63bbbe01eeed093cb22bb8f5acdc3",
    
}

def generate_file_hash(file_path):
    """Generate the hash of a file"""
    hasher = hashlib.sha1()
    with open(file_path, 'rb') as file:
        buffer = file.read()
        hasher.update(buffer)
    return hasher.hexdigest()

def check_integrity():
    """Check the integrity of system files"""
    modified_files = []

    for filename in trusted_database:
        file_path = os.path.join(directory_to_check, filename)
        if os.path.exists(file_path):
            file_hash = generate_file_hash(file_path)
            if file_hash != trusted_database[filename]:
                modified_files.append(filename)

    if modified_files:
        print("The following files have been modified:")
        for file in modified_files:
            print(file)
    else:
        print("System files integrity maintained. No modifications detected.")

if __name__ == "__main__":
    check_integrity()
