<svelte:options customElement="csur-client" />

<script lang="ts">
  import beercss from "beercss/src/cdn/beer.ts" 
  import Question from "./lib/Question.svelte"
  import { v4 as uuidv4 } from "uuid"
  import materialDynamicColors from "material-dynamic-colors/src/cdn/material-dynamic-colors.js"
  export let server: string = undefined
  export let id: string = undefined
  export let domain: string = undefined
  export let themeColor: string = undefined
  export let mode: string = undefined
  export let timeout: number = undefined
  import ansValidate from '../../src/functions/validate'
  if (!server || (!id && !domain)) {
    console.warn("[csur-client]: Please check the required params.")
  }

  let data: object = []
  let opacity: string = "opacity: 0;"

  let usrid: string = ""

  let tabActive: string = ""


  if (localStorage.getItem('cransurvey-usrid')) {
    usrid = localStorage.getItem('cransurvey-usrid')
  } else {
    usrid = uuidv4()
    localStorage.setItem('cransurvey-usrid', usrid)
  }

  fetch(`${server}/api/client/get?sid=${id || ''}&domain=${domain || ''}`, {
    method: "GET",
  }).then(res => res.json()).then(res => {
    data = res.data
    setTimeout(() => {
      opacity = "opacity: 1;"
    }, 100)
  })

  // beercss("theme", themeColor)
  let theme: object = {
    light: "",
    dark: "",
  }
  materialDynamicColors(themeColor).then(colors => {
    Object.entries(colors).forEach(([themeName, themeColors]) => {
        Object.entries(themeColors).forEach(([camelName, color]) => {
            const kebabName = camelName.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
            theme[themeName] += (`--${kebabName}: ${color.toUpperCase()}; `)
        })
    })
  })

 

  function closeTab() {
    opacity = "opacity: 0;"
    setTimeout(() => {
      data = []
    }, 400)
  
  }

  let ans = []

  let submitted, loading : boolean = false

  let response: string = ""

  function submitQuestion() {
    if (!data[0]) {
      return
    }
    if (tabActive) {
      tabActive = ""
    }
    for (let i in data[0].questions) {
      if (data[0].questions[i].required && !ans[i]) {
        response = "Please answer all the required questions."
        return
      }
    }


    loading = true
    fetch(`${server}/api/survey/collect`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        uniqueId: data[0].id,
        userId: usrid,
        answers: ans
      })
    }).then(res => res.json()).then(res => {
      if (res.code == 0) {
        submitted = true
        loading = false
        response = ""
        setTimeout(() => {
          closeTab()
        }, 2500)
      } else if (res.code == 3003) {
        response = "Please answer all the required questions."
        loading = false
        return
      } else if (res.code == 3002) {
        response = "The answer doesn't meet the requirements."
        loading = false
        return
      } else {
        response = "Something went wrong. Please try again later."
        loading = false
        return
      }
    })
  }

  function openQuestionsTab() {
    tabActive = "active"
    // window width
    let width = window.innerWidth
    if (width < 550) {
      tabActive += " max"
    }
  }

  if (timeout && !ans) {
    setTimeout(() => {
      closeTab()
    }, timeout)
  
  }
</script>

<body style={theme[mode]}>

{ #if (data.length > 0)}
  <article class="secondary-container csur-container {data[0].site.promptWindowPosition} {data[0].type}" style={opacity}>
    {#if loading}
    <progress class="app-progress-bar"></progress>
    {/if}
    <label class="radio icon close-btn" on:click={() => {closeTab()}}>
      <input type="radio" name="radio3_">
      <span>
        <i>close</i>
        <i>done</i>
      </span>
    </label>
    { #if !(data[0].site.promptWindowPosition == 'bottom_banner' && data[0].type == 'simple') }
    <div>
      <h5>{data[0].title}</h5>
      <p class="description">{data[0].description}</p>
    </div>
    {#if response}
    <article class="border question-box" style="margin-bottom: 1rem;">
      <p style="color: var(--error);">{response}</p>
      </article>
    {/if}
    {/if}
    <div class="banner_content">
      <div class="item_q">
        { #if (data[0].type == 'simple' && !submitted) }
          <Question question={data[0].questions[0]} bind:answer={ans[0]}/>
        {/if}
      </div>
      <div class="item">
        { #if (!submitted)}
        <nav class="right-align">
          { #if (data[0].type == 'advanced' || data[0].type == 'prompt') }
            <button class="border round" on:click={openQuestionsTab}>View</button>
          { :else if data[0].type == 'simple' }
            <button class="border round" on:click={submitQuestion}>Submit</button>
          {/if} 
        </nav>
        {:else}
        <article class="border question-box">
          <p class="">Your response has been recorded.</p>
        </article>
        {/if}
      </div>
    </div>
    
  </article>
  <div class="overlay {tabActive}"></div>
  <dialog class="{tabActive} questions-tab">
    {#if tabActive.includes("max")}
    <label class="radio icon close-btn" on:click={() => {tabActive = "active"}}>
      <input type="radio" name="radio3_">
      <span>
        <i>close_fullscreen</i>
      </span>
    </label>
    {:else}
    <label class="radio icon close-btn" on:click={() => {tabActive += " max"}}>
      <input type="radio" name="radio3_">
      <span>
        <i>fullscreen</i>
      </span>
    </label>
    {/if}
    {#if data[0].type == 'advanced'}
    <h5 style="margin-top: 0;">{data[0].title}</h5>
    <p class="description">{data[0].description}</p>
    <div>
      { #each data[0].questions as question, index}
        <Question question={question} bind:answer={ans[index]}/>
      {/each}
    </div>
    <nav class="right-align">
      <button class="border" on:click={() => {tabActive = ""}}>Cancel</button>
      <button class="round" on:click={submitQuestion}>Submit</button>
    </nav>
    {:else}
    <h5 style="margin-top: 0;">{data[0].questions[0].question}</h5>
    <p>{data[0].questions[0].prompt}</p>
    <nav class="right-align">
      <button class="border" on:click={() => {tabActive = ""}}>Cancel</button>
    </nav>
    {/if}
  </dialog>
  
{/if}


</body>


<style scoped>
  @import 'beercss/dist/cdn/beer.min.css';
    .csur-container {
      box-shadow: none!important;
      position: fixed;
      opacity: 0;
      transition: opacity .4s;
      z-index: 99;
      word-break: break-all;
      overflow: hidden;
    }
    .bottom_right {
      right: 1rem;
      bottom: 1rem;
      width: 450px;
      max-width: calc(100% - 2rem);
    }
    .bottom_left {
      left: 1rem;
      bottom: 1rem;
      width: 450px;
      max-width: calc(100% - 2rem);
    }
    .bottom_banner {
      bottom: 0;
      left: 0;
      width: 100%;
      /* display: flex; */

      
    }
    .bottom_banner.simple {
      padding-top: 0;
      padding-bottom: 0;

    }
    .bottom_banner.simple .banner_content {
      max-width: 960px;
    }
    .bottom_banner .banner_content {
      display: flex;
      max-height: 20rem;

      
      margin: 0 auto;
    }
    .bottom_banner .banner_content .item_q {
      width: 70%;
      margin-right: 15px;
    }
    .bottom_banner .banner_content .item {
      justify-content: right;
      align-items: center;
      display: flex;
      width: 25%;
    }
    article.csur-container .description {
      opacity: .8;
    }
    .close-btn {
      position: absolute;
      top: 0rem;
      right: 0;
      margin-top: 1.5rem;
      margin-right: 1rem;
      cursor: pointer;
    }
    .csur-container h5 {
      margin-top: 0;
    }
    .app-progress-bar {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      margin-top: 1px;
      border-radius: 24px;
      height: 5px;
    }
    .questions-tab {
      width: 480px;
    }
</style>