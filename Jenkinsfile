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
                sh 'npm install --force --loglevel verbose'
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
        stage("Remove app") {
            steps {
                sh '''
#!/bin/bash
HOST=zxyxy.net
USER=zxyxynet
PASSWORD=3oR37v3Hho

lftp -u $USER,$PASSWORD $HOST << EOF
set ssl:verify-certificate false
rm *.js
rm *.html
rm *.css
rm *.ico
EOF'''
            }
        }
    }
}
