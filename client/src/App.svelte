<svelte:options customElement="csur-client" />

<script lang="ts">
  import beercss from "beercss/src/cdn/beer.ts" 
  import Question from "./lib/Question.svelte"
  import { v4 as uuidv4 } from "uuid"
  import materialDynamicColors from "material-dynamic-colors/src/cdn/material-dynamic-colors.js"
  export let server: string = undefined
  export let id: string = undefined
  export let domain: string = undefined
  import ansValidate from '../../src/functions/validate'
  if (!server || (!id && !domain)) {
    throw new Error("[csur-client]: Please check the required params.")
  }

  let data: object = []
  let opacity: string = "opacity: 0;"

  let usrid: string = ""
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

  function closeTab() {
    opacity = "opacity: 0;"
    setTimeout(() => {
      data = []
    }, 400)
  
  }

  let ans = []

  let submitted, loading : boolean = false

  function submitQuestion() {
    if (!data[0]) {
      return
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
        setTimeout(() => {
          closeTab()
        }, 2500)
      }
    })
  }
</script>


{ #if data.length > 0 }
  <article class="secondary-container csur-container" style={opacity}>
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
    <h5>{data[0].title}</h5>
    <p class="description">{data[0].description}</p>
    { #if (data[0].type == 'simple' && !submitted) }
      <Question question={data[0].questions[0]} bind:answer={ans[0]}/>
    {/if}
    { #if (!submitted)}
    <nav class="right-align">
      { #if data[0].type == 'advanced' }
        <button class="border round">View</button>
      { :else if data[0].type == 'simple' }
        <button class="border round" on:click={submitQuestion}>Submit</button>
      {/if} 
    </nav>
    {:else}
    <article class="border question-box">
      <p class="">Your response has been recorded.</p>
    </article>
    {/if}
  </article>
{/if}






<style scoped>
  @import 'beercss/dist/cdn/beer.min.css';
    .csur-container {
      box-shadow: none!important;
      position: fixed;
      bottom: 1rem;
      right: 1rem;
      width: 450px;
      max-width: calc(100% - 2rem);
      opacity: 0;
      transition: opacity .4s;
      z-index: 9999;
      word-break: break-all;
      overflow: hidden;
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
</style>