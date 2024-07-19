import React from "react";

function Features () {
    return (
        <div className="features">
            <div className="features-text">

            
            <h2>TekkenSource</h2>
            <p>A TEKKEN 8 frame data webapp.</p>

            <h3>Characters</h3>
            <p>Characters have a small description of their general playstyle utilizing keywords under their name in their character pages. For a detailed description of these keywords, <a href="#keywords">see below.</a></p>

            <h3>Frame Data</h3>
            <p>Information for the frame data table is being fetched from a Google Sheets page and displayed on a table for every TEKKEN 8 character.</p>

            <h3>Search</h3>
            <p>The search bar on the frame data table lets you find moves you want easily. Currently, it supports multiple functionalities:</p>
            <ul>
                <li>Search by move input</li>
                <li>Search by move name</li>
                <li>Search by move startup (e.g. 'i10', 'i15')</li>
                <li>Search by move block frames (e.g. '+3', '-15')</li>
            </ul>
            <p>Let's look at an example. If we want to find Bryan's Snake Edge, 'df3', 'i29', '-26', '--15' and 'snake edge' are all valid inputs that return Bryan's Snake Edge move.</p>
            <p>When searching for a move's block frames, you can use a single + or - for exact matches (e.g. '-10' only returns moves that are -10) and using double '++' or '--' returns moves that are at least that and better/worse respectively (e.g. '++3' returns moves that are +3 or higher, '--15' returns moves that are at least -15 or worse. A simple way to find all launch punishable moves on a character's movelist.).</p>

            <h3>Frame Data Table</h3>
            <p>Block frames are color coded. Moves that are <span style={{color: 'rgb(24, 143, 255)' }}>+</span> on block are colored in blue, moves that are <span style={{color: 'rgb(255, 94, 94)' }}>-10</span> or higher are colored in a light red, and moves that are at least <span style={{color: 'rgb(207, 4, 4)' }}>-15</span> have a darker red color, to indicate that they are launch punishable by most of the cast.</p>

            <h3>Character Punishment</h3>
            <p>Punish moves for a character can be found here. An information icon is displayed for punishes that have notes. A (+) next to the damage value of a punish indicated a combo potential for more damage.</p>

            <h3>Character Resources</h3>
            <p>Find more information, including how to play the character, top moves to use, combos and more through the character's Discord server, written character guides and video guides.</p>

            <h3 id="keywords">Keyword Descriptions</h3>
            <ul className="keyword-list">
                <li><span className="keyword">50/50</span> - A character that lives and dies by the 50/50. Usually, risk/reward is a huge factor with these characters, but if the opponent guesses wrong everytime, the character will thrive.</li>
                <li><span className="keyword">Chip</span> - Relies on abusing their white life damage and stealing rounds from opponents who are being too passive.</li>
                <li><span className="keyword">Counter-Hit</span> - Has good moves that are greatly rewarded by counter-hits, and their playstyle revolves around getting these counter-hits. Steve and Bryan are classic examples, with b1 and 3+4 respectively.</li>
                <li><span className="keyword">Damage</span> - Can cash out big on damage, more so than most characters.</li>
                <li><span className="keyword">Execution</span> - Has powerful moves that are balanced by how hard they are to execute on a match. Electrics are the prime example, along with Bryan's Taunt Jet Upper and Lee's multiple just frame inputs.</li>
                <li><span className="keyword">Evasive</span> - Uses movement or stances to force whiffs out of their opponent where they would otherwise hit. Lili's powerful sidestep and Xiaoyu's AOP stance are examples of these. Many characters have evasive moves on their movelist, but characters that are evasive by nature use their evasiveness as part of their gameplan.</li>
                <li><span className="keyword">Install</span> - Has gameplay mechanics that buff moves out of their movelist. Claudio's Starburst and Eddy's Mandinga are examples. Heat could be considered an Install.</li>
                <li><span className="keyword">Keepout</span> - Relies on long range, punishing moves that are safer than most to throw out in an attempt to make their opponents second guess their approach. Lee's b4, Jack-8's df2 and Jin's f4 are some examples.</li>
                <li><span className="keyword">Mixups</span> - This character has moves and pokes that keep their opponent constantly guessing between mids and lows, usually in a looping vortex that repeats on itself over and over. Hwoarang is the classic Mixups character, as well as Kazuya, albeit with more risk inherent of his 50/50 gameplan.</li>
                <li><span className="keyword">Mishima</span> - Jin, Kazuya and Reina are considered Mishimas, not only because of the lore that they share, but some characteristics of their movelist as well, including Electrics, Hellsweeps and Wavedashes.</li>
                <li><span className="keyword">Movement</span> - Character has above-average ability to move around, including sidesteps, backdashes, evasive moves and such. Lili's sidestep puts her on a cut above the rest, and its a key cornerstone of her gameplan.</li>
                <li><span className="keyword">Oki</span> - Characters that have ways to punish the way that an opponent stands up from the ground have good Oki. Characters like Xiaoyu and King have setups and moves that opponents must be aware of if they don't want to take free damage simply from standing up incorrectly.</li>
                <li><span className="keyword">Poke</span> - Small, simple moves that a character has that are above average in multiple ways such as start-up, tracking, counter-hits, damage and frame data. Feng's pokes have always been very strong, leading to his sticky and suffocating offense.</li>
                <li><span className="keyword">Pressure</span> - This character has moves that force reactions from their opponent, either by enforcing constant plus frames or movement-based offense, and then capitalizing out of their opponent's mistakes. Dragunov's pokes and moves like his b1+2 are always putting on the pressure for the opponent to do something.</li>
                <li><span className="keyword">Punishment</span> - A character with above average punishment from the rest of the cast. They can either launch sooner than most of the cast, or have exceptional damage and situations from their punishment. Jun's uf1 as a knockdown, 36 damage punish starting from -10 is very punishing.</li>
                <li><span className="keyword">Range</span> - Uses moves that have a higher range than most of the cast, enabling them to either keepout the opponent effectively or have an easier time approaching opponents. Due to his large limbs, Jack-8 has exceptional range on most of his punch moves.</li>
                <li><span className="keyword">Reversal</span> - Makes their opponent second guess their offense with fast, evasive and rewarding moves that effectively steal their opponent's turn. Yoshi's Flash is the prime example, with Asuka and Jun's large array of parries, sabakis and Can-Cans a close second.</li>
                <li><span className="keyword">Rushdown</span> - A character that uses their fast pokes, good pressure and movement to overwhelm the opponent up-close. Law and Dragunov are quintessential Rushdown characters.</li>
                <li><span className="keyword">Slide</span> - Law, Lee and Shaheen all have Slide crouch mixups. While other characters like Raven and Nina have crouch mixups as well, Slide is especially effective due to its quick speed, damage, threat and relative lower risk.</li>
                <li><span className="keyword">Space-Control</span> - Relies on big range moves to control the space around them and force their opponent to play around their moves if they want to start any offense. Jin's f4, Bryan's 3+4 and Jack-8's df2 are good examples.</li>
                <li><span className="keyword">Stance</span> - A character whose gameplan mainly revolves around the use of their stances and transitions. A player of this character must be intimately aware of all of their stances, transitions and options out of their stance in every situation to be effective. Hwoarang's multiple stances and transitions are an example.</li>
                <li><span className="keyword">Tricky</span> - Has moves, stances and other characteristics that are more special to the character, and causes unique situations and interactions that are not common on other characters, as well as overwhelming the opponent with multiple cancels, transitions and options for creative, flow-heavy gameplay.</li>
                <li><span className="keyword">Unique</span> - Yoshi is weird.</li>
                <li><span className="keyword">Well-Rounded</span> - A character that has good Tekken 'basics', like a good mid poke, good low pokes, good launchers and punishment. A character that isn't particularly lacking in any aspect, but usually isn't a clear standout in any, either.</li>
            </ul>

            </div>
        </div>
    )
}

export default Features;