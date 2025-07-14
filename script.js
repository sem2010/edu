document.addEventListener('DOMContentLoaded', () => {
    const simulationModal = document.getElementById('simulation-modal');
    const closeButton = document.querySelector('.close-button');
    const simulationDisplay = document.getElementById('simulation-display');

    // 모달 닫기
    closeButton.addEventListener('click', () => {
        simulationModal.style.display = 'none';
        simulationDisplay.innerHTML = ''; // 시뮬레이션 내용 초기화
    });

    // 모달 외부 클릭 시 닫기
    window.addEventListener('click', (event) => {
        if (event.target === simulationModal) {
            simulationModal.style.display = 'none';
            simulationDisplay.innerHTML = '';
        }
    });

    // 시뮬레이션 함수
    window.startSimulation = (type) => {
        simulationModal.style.display = 'flex';
        simulationDisplay.innerHTML = ''; // 이전 시뮬레이션 내용 초기화

        switch (type) {
            case 'login':
                runLoginSimulation();
                break;
            case 'checkAssignment':
                runCheckAssignmentSimulation();
                break;
            case 'submitSheet':
                runSubmitSheetSimulation();
                break;
            case 'submitAttachment':
                runSubmitAttachmentSimulation();
                break;
            default:
                simulationDisplay.innerHTML = '<p>⚠️ 시뮬레이션 오류가 발생했어요! 잠시 후 다시 시도해주세요.</p>';
        }
    };

    function runLoginSimulation() {
        let step = 0;
        const messages = [
            '1. 먼저, 구글 로그인 페이지로 이동합니다. ➡️',
            '2. 학교에서 받은 계정 (예: 2510134@gaepo.sen.ms.kr)을 입력하고 "다음" 버튼을 클릭합니다. 📧',
            '3. 학교에서 안내받은 초기 비밀번호를 입력하고 "다음" 버튼을 클릭합니다. 🔐',
            '4. 성공적으로 로그인되었습니다! 🎉 새로운 비밀번호를 생성해주세요. 이제 구글 워크스페이스를 사용할 준비가 완료되었어요!'
        ];

        function displayNextMessage() {
            if (step < messages.length) {
                simulationDisplay.innerHTML = `<p>${messages[step]}</p>`;
                step++;
                setTimeout(displayNextMessage, 2000); // 2초마다 다음 메시지 표시
            } else {
                simulationDisplay.innerHTML += '<p>🥳 잘하셨어요! 로그인 시뮬레이션이 완료되었습니다!</p>';
            }
        }
        displayNextMessage();
    }

    function runCheckAssignmentSimulation() {
        let step = 0;
        const messages = [
            '1. 로그인 후 구글 클래스룸에 접속합니다. 🏫',
            '2. 참여하고 있는 클래스를 클릭합니다. (예: 1학년 1반) 📚',
            '3. "수업" 탭을 클릭하여 과제 목록을 확인합니다. 📝',
            '4. 마감 기한과 함께 과제 내용이 표시됩니다. 과제를 클릭하여 자세한 내용을 확인하세요! ✅'
        ];

        function displayNextMessage() {
            if (step < messages.length) {
                simulationDisplay.innerHTML = `<p>${messages[step]}</p>`;
                step++;
                setTimeout(displayNextMessage, 2000);
            } else {
                simulationDisplay.innerHTML += '<p>👍 과제 확인 시뮬레이션 완료! 이제 과제를 놓칠 일은 없을 거예요!</p>';
            }
        }
        displayNextMessage();
    }

    function runSubmitSheetSimulation() {
        let step = 0;
        const messages = [
            '1. 시트형 과제를 클릭하여 엽니다. 📊',
            '2. 구글 스프레드시트가 열리면, 과제 내용을 완성합니다. 🖊️',
            '3. 따로 저장 버튼을 누를 필요 없이 자동으로 저장됩니다! 💾',
            '4. 과제 페이지로 돌아와 "제출" 버튼을 클릭합니다. 🚀',
            '5. 제출 완료! ✨'
        ];

        function displayNextMessage() {
            if (step < messages.length) {
                simulationDisplay.innerHTML = `<p>${messages[step]}</p>`;
                step++;
                setTimeout(displayNextMessage, 2000);
            } else {
                simulationDisplay.innerHTML += '<p>🎉 시트형 과제 제출 성공! 참 잘했어요!</p>';
            }
        }
        displayNextMessage();
    }

    function runSubmitAttachmentSimulation() {
        let step = 0;
        const messages = [
            '1. 첨부형 과제를 클릭하여 엽니다. 📂',
            '2. "내 과제" 섹션에서 "추가 또는 생성" 버튼을 클릭합니다. ➕',
            '3. Google Drive, 파일 업로드, 문서 등 원하는 방법을 선택하여 파일을 첨부합니다. 📎',
            '4. 파일이 첨부되면 "제출" 버튼을 클릭합니다. 🚀',
            '5. 제출 완료! ✨'
        ];

        function displayNextMessage() {
            if (step < messages.length) {
                simulationDisplay.innerHTML = `<p>${messages[step]}</p>`;
                step++;
                setTimeout(displayNextMessage, 2000);
            } else {
                simulationDisplay.innerHTML += '<p>🤩 첨부형 과제 제출도 문제없겠죠? 멋져요!</p>';
            }
        }
        displayNextMessage();
    }
});