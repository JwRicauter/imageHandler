cd frontend

# Building the front end
yarn build

# Moving files to a build root subdirectory inside build
mkdir -p build/root
for file in $(ls build | grep -E -v '^(index\.html|static|root)$'); do
    mv "build/$file" build/root;
done

# Now lets move to the backend folder
cd ..
cd backend
source env/bin/activate
cd imagehandler

# Collecting statics
python3 ./manage.py collectstatic --no-input


cd ../..