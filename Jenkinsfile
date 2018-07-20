pipeline {
    agent any
    environment {
        PATH = "C:/Users/MP054970.WHQ_NT_DOMAIN/AppData/Roaming/npm;%path%"
    }
    stages {
        stage('npm-build') {
            steps {
                echo "Branch is ${env.BRANCH_NAME}..."
                bat 'npm install'
            }
        }
        stage('karma') {
            steps {
                echo "Running karma"
                bat 'karma start ./karma.conf.js';
                   
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
       
    }
}
