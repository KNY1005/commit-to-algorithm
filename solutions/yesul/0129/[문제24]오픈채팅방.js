function solution(record) {
    const msgMap = {
        "Leave": "님이 나갔습니다.",
        "Enter": "님이 들어왔습니다."
    }

    // 유저 닉네임 업데이트
    const users = record.reduce((acc, cur) => {
        const [action, userId, userName] = cur.split(' ');

        // 닉네임 정보가 있는 경우에만 업데이트 (Enter, Change)
        if (action !== 'Leave') {
            acc[userId] = userName;
        }

        return acc;
    }, {});

    // 메시지 생성return record
    return record
        .filter(line => !line.startsWith('Change'))
        .map((line) => {
            const [action, userId] = line.split(' ');
            return `${users[userId]}${msgMap[action]}`;
        });
}