pipeline {
    agent any
    triggers {
        pollSCM('* * * * *')
    }
  stages {
    stage('Install') {
      steps { sh 'npm install' }
    }

    stage('Test') {
      parallel {
        stage('Static code analysis') {
            steps { sh 'npm run-script lint' }
        }
        stage('Unit tests') {
            steps { sh 'npm run-script test' }
        }
      }
    }

    stage('Build') {
      steps { sh 'npm run-script build' }
    }
  

        stage('Docker Build') {
            steps {
                echo '----------------- This is a build docker image phase ----------'
                sh '''
                    docker image build -t food-box .
                '''
            }
        }

        stage('Docker Deploy') {
            steps {
                echo '----------------- This is a docker deployment phase ----------'
                sh '''
                 (if  [ $(docker ps -a | grep food-box | cut -d " " -f1) ]; then \
                        echo $(docker rm -f food-box); \
                        echo "---------------- successfully removed food-box ----------------"
                     else \
                    echo OK; \
                 fi;);
            docker container run --restart always --name food-box -p 8082:8082 -d food-box
            '''
            }
        }
        
    }
}
