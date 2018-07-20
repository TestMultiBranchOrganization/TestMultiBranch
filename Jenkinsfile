pipeline {
    agent any

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
                bat 'set path=C:/Users/MP054970.WHQ_NT_DOMAIN/AppData/Roaming/npm;%path%;
                     karma start ./karma.conf.js'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
       
    }
}
