function toggleScheme(): void {
    console.log(localStorage.getItem("nasin-lukin"))
    switch (localStorage.getItem("nasin-lukin")) {
    case "walo":
        localStorage.setItem("nasin-lukin", "pimeja")
        break

    case "pimeja":
        localStorage.setItem("nasin-lukin", "walo")
        break

    default:
        localStorage.setItem("nasin-lukin", "walo")
        break
    }

    applyScheme()
}

function applyScheme(): void {
    switch (localStorage.getItem("nasin-lukin")) {
    case "walo":
        (document.querySelector(":root") as HTMLElement).setAttribute("data-nasin-lukin", "walo")
        break;
    case "pimeja":
        (document.querySelector(":root") as HTMLElement).setAttribute("data-nasin-lukin", "pimeja")
        break;
    default:
        (document.querySelector(":root") as HTMLElement).setAttribute("data-nasin-lukin", "ala")
        break;
    }
}

function addlen(len: string): void {
    let mu = (JSON.parse(localStorage.getItem("lens")) || []) as string[]
    mu.push(len)
    localStorage.setItem("lens", JSON.stringify(mu))
    applylens()
}

function removelen(len: string): void {
    let mu = (JSON.parse(localStorage.getItem("lens")) || []) as string[]
    mu = mu.filter(item => item != len)
    localStorage.setItem("lens", JSON.stringify(mu))
    applylens()
}

function applylens(): void {
    let items = (JSON.parse(localStorage.getItem("lens")) || []) as string[]

    document.querySelectorAll(`.lt-card.lt-article-card`).forEach(item => {
        let a: string[] = []
        item.querySelectorAll(`.lt-article-card-chip`).forEach(item => {
            a.push(item.textContent)
        })
        if (a.some(item => items.includes(item))) {
            item.classList.add("lipu-len")
        } else {
            item.classList.remove("lipu-len")
        }
    })
}

applyScheme()
applylens()
