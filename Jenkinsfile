pipeline {
    agent any
    environment {
        KARMA_HOME = "C:/Users/MP054970.WHQ_NT_DOMAIN/AppData/Roaming/npm"
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
                bat '${KARMA_HOME}/karma start ./karma.conf.js';
                   
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
       
    }
}
