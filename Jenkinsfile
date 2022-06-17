pipeline {
    agent any

    stages {
        stage('BUILD FOR NPM') {
            steps {
                sh '''
                npm install
                npm build
                '''
            }
        }
        stage('NPM PUBLISH') {
            steps {
                sh '''
                    echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" >> ~/.npmrc
                    npm publish
                '''
            }
        }
        stage('BUILD IMAGE') {
            steps {
                sh '''
                # 이미지 새로 빌드
                docker build -t default-ui-image .
                '''
            }
        }
        stage('RUN CONTAINER') {
            steps {
                sh'''
                # 이미 돌아가고 있는 컨테이너가 있다면
                if test ! -z "$(docker ps -af name=default-ui-container | grep -w default-ui-container$)"; then
                    docker stop default-ui-container && docker rm default-ui-container
                fi
                
                # 새로 띄운다
                docker run -itd --name default-ui-container -e VIRTUAL_HOST=default-ui.bigpicture.team default-ui-image:latest

                # 불필요한 none 이미지들 삭제
                docker rmi $(docker images --filter "dangling=true" -q --no-trunc)
                '''
            }
        }
    }
}