import smallStar from '../images/star.svg'
import githubAccent from '../images/github_accent.svg'
import demo from '../images/demo.svg'

const userName = "michal-baran"
const direction = "asc"
const projectsContainer = document.querySelector('.projects--js')

fetch(`https://api.github.com/users/${userName}/repos?direction=${direction}`)
.then(response => response.json())
.then(response => {
    for (let repository of response) {
        const {name, html_url, homepage, description, stargazers_count, topics} = repository;
        let tags = ``;

        for (let tag of topics) {
            tags += `<li class="h-7 font-bold rounded bg-gray-400 bg-opacity-10 text-sm px-2 py-1 uppercase">${tag}</li>`
        }
        const element = `<article class="bg-gradient-to-br from-white/10 to-white/5 rounded-[1.25rem] overflow-clip">
        <div
          class="p-4 h-11 flex gap-1.5 bg-gradient-to-br from-white/10 to-white/5 border-b border-b-slate-950 shadow-innerlight">
          <span class="w-3 h-3 block rounded-full bg-bg opacity-50"></span>
          <span class="w-3 h-3 block rounded-full bg-bg opacity-50"></span>
          <span class="w-3 h-3 block rounded-full bg-bg opacity-50"></span>
        </div>
        <div class="lg:p-10 md:p-6 p-5">
          <div class="flex gap-4">
            <h3 class="font-bold text-2xl">${name}</h3>
            <p
              class="bg-gray-400 bg-opacity-10 rounded flex gap-0.5 py-1 px-2 font-medium text-base text-[#9CA3AF] items-center">
              <img class="w-4 h-4" src="${smallStar}" alt="Star icon" />${stargazers_count}</p>
          </div>
          <p class="text-xl text-gray-400 my-4">${description}
          </p>
          <ul class="flex flex-wrap gap-2 mb-10">
            ${tags}
          </ul>
          <div class="flex flex-col md:flex-row gap-4 md:text-xl text-base">
            <a href="${homepage}" 
                target="blank"
                rel="noreferrer nofollow"
                class="w-max border border-slate-800 font-bold text-accent  py-4 px-5 flex gap-2 items-center rounded-xl bg-slate-950">
                <img class="" src="${demo}" alt="Simple window icon">View demo</a>
            <a href="${html_url}"
                target="blank"
                rel="noreferrer nofollow"
                class="w-max border border-slate-800 font-bold text-accent py-4 px-5 flex gap-2 items-center rounded-xl bg-slate-950">
                <img class="" src="${githubAccent}" alt="Github logo in color">Source code</a>
          </div>
        </div>
        </article>`;
        if (homepage)
        projectsContainer.insertAdjacentHTML('beforeend', element)
    }
})
.catch((e)  => console.log(e))


