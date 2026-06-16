const matches = [
    // GROUP A
    { id: 1, team1: { name: "Mexico", flag: "🇲🇽" }, team2: { name: "South Africa", flag: "🇿🇦" }, date: "Jun 11 — Mexico City", group: "Group A" },
    { id: 2, team1: { name: "South Korea", flag: "🇰🇷" }, team2: { name: "Czechia", flag: "🇨🇿" }, date: "Jun 11 — Guadalajara", group: "Group A" },
    { id: 3, team1: { name: "Mexico", flag: "🇲🇽" }, team2: { name: "South Korea", flag: "🇰🇷" }, date: "Jun 18 — Zapopan", group: "Group A" },
    { id: 4, team1: { name: "Czechia", flag: "🇨🇿" }, team2: { name: "Mexico", flag: "🇲🇽" }, date: "Jun 24 — Mexico City", group: "Group A" },
    // GROUP B
    { id: 5, team1: { name: "Canada", flag: "🇨🇦" }, team2: { name: "Bosnia", flag: "🇧🇦" }, date: "Jun 12 — Toronto", group: "Group B" },
    { id: 6, team1: { name: "Qatar", flag: "🇶🇦" }, team2: { name: "Switzerland", flag: "🇨🇭" }, date: "Jun 12 — San Francisco", group: "Group B" },
    // GROUP C
    { id: 7, team1: { name: "Brazil", flag: "🇧🇷" }, team2: { name: "Morocco", flag: "🇲🇦" }, date: "Jun 13 — New Jersey", group: "Group C" },
    { id: 8, team1: { name: "Haiti", flag: "🇭🇹" }, team2: { name: "Scotland", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿" }, date: "Jun 13 — Boston", group: "Group C" },
    // GROUP D
    { id: 9, team1: { name: "USA", flag: "🇺🇸" }, team2: { name: "Paraguay", flag: "🇵🇾" }, date: "Jun 12 — Los Angeles", group: "Group D" },
    { id: 10, team1: { name: "Australia", flag: "🇦🇺" }, team2: { name: "Turkiye", flag: "🇹🇷" }, date: "Jun 13 — Vancouver", group: "Group D" },
    // GROUP E
    { id: 11, team1: { name: "Germany", flag: "🇩🇪" }, team2: { name: "Curacao", flag: "🇨🇼" }, date: "Jun 14 — Miami", group: "Group E" },
    { id: 12, team1: { name: "Ivory Coast", flag: "🇨🇮" }, team2: { name: "Ecuador", flag: "🇪🇨" }, date: "Jun 14 — Dallas", group: "Group E" },
    // GROUP F
    { id: 13, team1: { name: "Netherlands", flag: "🇳🇱" }, team2: { name: "Japan", flag: "🇯🇵" }, date: "Jun 15 — Los Angeles", group: "Group F" },
    { id: 14, team1: { name: "Sweden", flag: "🇸🇪" }, team2: { name: "Tunisia", flag: "🇹🇳" }, date: "Jun 15 — Kansas City", group: "Group F" },
    // GROUP G
    { id: 15, team1: { name: "Belgium", flag: "🇧🇪" }, team2: { name: "Egypt", flag: "🇪🇬" }, date: "Jun 15 — Los Angeles", group: "Group G" },
    { id: 16, team1: { name: "Iran", flag: "🇮🇷" }, team2: { name: "New Zealand", flag: "🇳🇿" }, date: "Jun 15 — Seattle", group: "Group G" },
    // GROUP H
    { id: 17, team1: { name: "Spain", flag: "🇪🇸" }, team2: { name: "Cabo Verde", flag: "🇨🇻" }, date: "Jun 15 — Atlanta", group: "Group H" },
    { id: 18, team1: { name: "Saudi Arabia", flag: "🇸🇦" }, team2: { name: "Uruguay", flag: "🇺🇾" }, date: "Jun 15 — Houston", group: "Group H" },
    // GROUP I
    { id: 19, team1: { name: "France", flag: "🇫🇷" }, team2: { name: "Senegal", flag: "🇸🇳" }, date: "Jun 16 — New Jersey", group: "Group I" },
    { id: 20, team1: { name: "Iraq", flag: "🇮🇶" }, team2: { name: "Norway", flag: "🇳🇴" }, date: "Jun 16 — Boston", group: "Group I" },
    // GROUP J
    { id: 21, team1: { name: "Argentina", flag: "🇦🇷" }, team2: { name: "Algeria", flag: "🇩🇿" }, date: "Jun 16 — Kansas City", group: "Group J" },
    { id: 22, team1: { name: "Austria", flag: "🇦🇹" }, team2: { name: "Jordan", flag: "🇯🇴" }, date: "Jun 16 — Santa Clara", group: "Group J" },
    // GROUP K
    { id: 23, team1: { name: "Portugal", flag: "🇵🇹" }, team2: { name: "DR Congo", flag: "🇨🇩" }, date: "Jun 17 — Houston", group: "Group K" },
    { id: 24, team1: { name: "Uzbekistan", flag: "🇺🇿" }, team2: { name: "Colombia", flag: "🇨🇴" }, date: "Jun 17 — Mexico City", group: "Group K" },
    // GROUP L
    { id: 25, team1: { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" }, team2: { name: "Croatia", flag: "🇭🇷" }, date: "Jun 17 — Dallas", group: "Group L" },
    { id: 26, team1: { name: "Ghana", flag: "🇬🇭" }, team2: { name: "Panama", flag: "🇵🇦" }, date: "Jun 17 — Philadelphia", group: "Group L" }
];
