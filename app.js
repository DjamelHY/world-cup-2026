// Get username
let username = localStorage.getItem('wc2026_user');
if (!username) {
    username = prompt('Enter your name to compete:') || 'Anonymous';
    localStorage.setItem('wc2026_user', username);
}

// Get saved predictions
let predictions = JSON.parse(localStorage.getItem('wc2026_predictions') || '{}');

// Render matches
function renderMatches() {
    const container = document.getElementById('matches-container');
    container.innerHTML = '';

    matches.forEach(match => {
        const saved = predictions[match.id];
        const card = document.createElement('div');
        card.className = 'match-card';
        card.innerHTML = `
            <div class="match-date">📅 ${match.date} | ${match.group}</div>
            <div class="match-teams">
                <div class="team">
                    <div class="flag">${match.team1.flag}</div>
                    <div class="name">${match.team1.name}</div>
                </div>
                <div class="vs">VS</div>
                <div class="team">
                    <div class="flag">${match.team2.flag}</div>
                    <div class="name">${match.team2.name}</div>
                </div>
            </div>
            <div class="predict-btns">
                <button onclick="predict(${match.id}, '${match.team1.name}')"
                    class="${saved === match.team1.name ? 'selected' : ''}">
                    ${match.team1.flag} ${match.team1.name} Wins
                </button>
                <button onclick="predict(${match.id}, 'Draw')"
                    class="draw ${saved === 'Draw' ? 'selected' : ''}">
                    Draw
                </button>
                <button onclick="predict(${match.id}, '${match.team2.name}')"
                    class="${saved === match.team2.name ? 'selected' : ''}">
                    ${match.team2.flag} ${match.team2.name} Wins
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Save prediction
function predict(matchId, choice) {
    predictions[matchId] = choice;
    localStorage.setItem('wc2026_predictions', JSON.stringify(predictions));

    // Save to leaderboard
    let leaderboard = JSON.parse(localStorage.getItem('wc2026_leaderboard') || '{}');
    if (!leaderboard[username]) {
        leaderboard[username] = { name: username, points: 0, predictions: 0 };
    }
    leaderboard[username].predictions = Object.keys(predictions).length;
    localStorage.setItem('wc2026_leaderboard', JSON.stringify(leaderboard));

    renderMatches();
    showToast(`✅ Predicted: ${choice}`);
}

// Toast notification
function showToast(msg) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed; bottom: 20px; left: 50%;
        transform: translateX(-50%);
        background: #f4c430; color: #0a0e1a;
        padding: 12px 25px; border-radius: 25px;
        font-weight: bold; z-index: 999;
        animation: fadeout 2s forwards;
    `;
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

renderMatches();
