// Common English verbs and their forms
const verbData = [
    ["accept", "accepts", "accepting", "accepted", "accepted"],
    ["act", "acts", "acting", "acted", "acted"],
    ["add", "adds", "adding", "added", "added"],
    ["allow", "allows", "allowing", "allowed", "allowed"],
    ["ask", "asks", "asking", "asked", "asked"],
    ["be", "is", "being", "was/were", "been"],
    ["become", "becomes", "becoming", "became", "become"],
    ["begin", "begins", "beginning", "began", "begun"],
    ["break", "breaks", "breaking", "broke", "broken"],
    ["bring", "brings", "bringing", "brought", "brought"],
    ["build", "builds", "building", "built", "built"],
    ["buy", "buys", "buying", "bought", "bought"],
    ["call", "calls", "calling", "called", "called"],
    ["carry", "carries", "carrying", "carried", "carried"],
    ["catch", "catches", "catching", "caught", "caught"],
    ["choose", "chooses", "choosing", "chose", "chosen"],
    ["come", "comes", "coming", "came", "come"],
    ["cost", "costs", "costing", "cost", "cost"],
    ["cut", "cuts", "cutting", "cut", "cut"],
    ["do", "does", "doing", "did", "done"],
    ["draw", "draws", "drawing", "drew", "drawn"],
    ["drink", "drinks", "drinking", "drank", "drunk"],
    ["drive", "drives", "driving", "drove", "driven"],
    ["eat", "eats", "eating", "ate", "eaten"],
    ["fall", "falls", "falling", "fell", "fallen"],
    ["feel", "feels", "feeling", "felt", "felt"],
    ["find", "finds", "finding", "found", "found"],
    ["fly", "flies", "flying", "flew", "flown"],
    ["forget", "forgets", "forgetting", "forgot", "forgotten"],
    ["get", "gets", "getting", "got", "got/gotten"],
    ["give", "gives", "giving", "gave", "given"],
    ["go", "goes", "going", "went", "gone"],
    ["grow", "grows", "growing", "grew", "grown"],
    ["have", "has", "having", "had", "had"],
    ["hear", "hears", "hearing", "heard", "heard"],
    ["help", "helps", "helping", "helped", "helped"],
    ["hold", "holds", "holding", "held", "held"],
    ["keep", "keeps", "keeping", "kept", "kept"],
    ["know", "knows", "knowing", "knew", "known"],
    ["learn", "learns", "learning", "learned/learnt", "learned/learnt"],
    ["leave", "leaves", "leaving", "left", "left"],
    ["let", "lets", "letting", "let", "let"],
    ["lose", "loses", "losing", "lost", "lost"],
    ["make", "makes", "making", "made", "made"],
    ["mean", "means", "meaning", "meant", "meant"],
    ["meet", "meets", "meeting", "met", "met"],
    ["pay", "pays", "paying", "paid", "paid"],
    ["put", "puts", "putting", "put", "put"],
    ["read", "reads", "reading", "read", "read"],
    ["run", "runs", "running", "ran", "run"],
    ["say", "says", "saying", "said", "said"],
    ["see", "sees", "seeing", "saw", "seen"],
    ["sell", "sells", "selling", "sold", "sold"],
    ["send", "sends", "sending", "sent", "sent"],
    ["set", "sets", "setting", "set", "set"],
    ["show", "shows", "showing", "showed", "shown"],
    ["sing", "sings", "singing", "sang", "sung"],
    ["sit", "sits", "sitting", "sat", "sat"],
    ["sleep", "sleeps", "sleeping", "slept", "slept"],
    ["speak", "speaks", "speaking", "spoke", "spoken"],
    ["spend", "spends", "spending", "spent", "spent"],
    ["stand", "stands", "standing", "stood", "stood"],
    ["take", "takes", "taking", "took", "taken"],
    ["teach", "teaches", "teaching", "taught", "taught"],
    ["tell", "tells", "telling", "told", "told"],
    ["think", "thinks", "thinking", "thought", "thought"],
    ["throw", "throws", "throwing", "threw", "thrown"],
    ["understand", "understands", "understanding", "understood", "understood"],
    ["wake", "wakes", "waking", "woke", "woken"],
    ["wear", "wears", "wearing", "wore", "worn"],
    ["win", "wins", "winning", "won", "won"],
    ["write", "writes", "writing", "wrote", "written"]
];