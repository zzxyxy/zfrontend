pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                // Get some code from a GitHub repository
                git url: 'https://github.com/zzxyxy/zfrontend.git', branch: 'main'
            }
        }
        stage('get dependencies') {
            steps {
                sh 'npm install --loglevel verbose'
            }
        }
        stage('build') {
            steps {
                sh 'npm run ng build'
            }
        }
        stage('Archive') {
            steps {
                archiveArtifacts artifacts: 'dist/**/*', followSymlinks: false, onlyIfSuccessful: true
            }
        }
    }
}
