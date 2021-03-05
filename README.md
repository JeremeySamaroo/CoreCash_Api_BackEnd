# CoreCash_Api_BackEnd
2021 Final Project Api and Database Setup

## Initial Project Setup on Mac
1) Create A Folder "FinalProjects" in Documents.

2) Download Git zip and place into "FinalProject" Folder

3) Check if Git is install properly.

4) Initialize git and create initial commit.

5) Create Docker Containers for the project.


## Setting up Git on mac 
1) Run the following command Note: Only if git not installed else go to step 2
```
xcode-select --install
```

2)Initialize git project
```
git init .
```

3)Add git remote to repository in each of the project required folders.
```
git remote add origin <url>
```

4)Add git files
```
git add .
```
5)Commit to git
```
git commit -m "<Some-Message>"
```

## Create Docker Container for Api
1) Create a Docker network
```
docker network create corecash
```

2) Build Docker API container
```
docker build -t api_corecash_container -f DEV.Dockerfile .
```

3) Create Docker API container with link to folder
```
docker run --name=API_CoreCash -v /Users/<username>/Documents/FinalProjects/CoreCash_Api_BackEnd-master:/app --network=corecash -p 3000:3000 api_corecash_container

J_Specific 
docker run --name=API_CoreCash -v /Users/maleeq/Documents/FinalProjects/CoreCash_Api_BackEnd-master:/app --network=corecash -p 3000:3000 api_corecash_container

D_Specific
docker run --name=API_CoreCash -v /Users/donnamariedeowan/Documents/FinalProjects/CoreCash_Api_BackEnd-master:/app --network=corecash -p 3000:3000 api_corecash_container
```

## Create Docker Container for MongoDB

1) Create Monogodb Image
```
docker pull mongo
```

2) Create a folder in "FinalProject" called "dockerMongoCoreCash"

3) Create Mongodb Container
```
D_Specific
docker run -it -v /Users/donnamariedeowan/Documents/FinalProjects/dockerMongoCoreCash:/data/db --network=corecash -p 27017:27017 --name dockerMongodbCoreCash -d mongo

J_Specific
docker run -it -v /Users/maleeq/Documents/FinalProjects/dockerMongoCoreCash:/data/db --network=corecash -p 27017:27017 --name dockerMongodbCoreCash -d mongo
```
something

