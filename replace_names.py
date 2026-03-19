import os

def replace_in_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        return False
        
    new_content = content.replace("MEDiLOGiS-Ai", "GiFT-Ai").replace("MEDiLOGiS", "GiFT").replace("메디로지스", "기프트샵")
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

def main():
    base_dir = "."
    exclude_dirs = {"node_modules", ".git", "build", "dist", ".next"}
    
    count = 0
    for root, dirs, files in os.walk(base_dir):
        dirs[:] = [d for d in dirs if d not in exclude_dirs]
        for file in files:
            if file.endswith((".ts", ".tsx", ".js", ".jsx", ".html", ".css", ".json", ".md", ".env", ".prisma", ".yaml", ".yml")):
                filepath = os.path.join(root, file)
                if replace_in_file(filepath):
                    count += 1
                    print(f"Updated: {filepath}")
                    
    print(f"Total files updated: {count}")

if __name__ == "__main__":
    main()
