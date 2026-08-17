pipeline {
    agent { label 'windows' }

    environment {
        CI = 'true'
        NODE_ENV = 'test'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code'
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                echo 'Installing Node dependencies'
                bat 'node -v'
                bat 'npm ci'
            }
        }

        stage('Install Playwright browsers') {
            steps {
                echo 'Installing Playwright browser dependencies'
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright tests') {
            steps {
                echo 'Running Playwright suite'
                bat 'npx playwright test --reporter=line --workers=1'
            }
        }

        stage('Publish Playwright report') {
            steps {
                publishHTML(target: [
                    allowMissing: true,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright Report'
                ])
            }
        }
    }

    post {
        always {
            echo 'Archiving test artifacts'
            archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true, allowEmptyArchive: true
            archiveArtifacts artifacts: 'test-results/**', fingerprint: true, allowEmptyArchive: true
        }
        failure {
            echo 'Playwright tests failed. Check the report and logs.'
        }
    }
}
