pipeline {
    agent any

    stages {
        stage('npm-build') {
            steps {
                echo "Branch is ${env.BRANCH_NAME}..."
                sh 'npm install'
            }
        }
        stage('karma') {
            steps {
                echo "Running karma"
                sh ('karma start karma.conf.js')
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
       
    }
}
