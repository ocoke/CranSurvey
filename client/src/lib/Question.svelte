<script lang="ts">
	import beercss from "beercss/src/cdn/beer.ts"
	import materialDynamicColors from "material-dynamic-colors/src/cdn/material-dynamic-colors.js"
    import ansValidate from '../../../src/functions/validate'
	export let question: object = undefined
    export let answer: object = {
        id: String(question.id),
        answer: ''
    }

    let error, errorText: string = ""
    let checkboxes: object = []
    function check(e) {
        let result = ansValidate(e.target.value, question.type, question.validate)
        if (!result) {
            error = "invalid"
            errorText = `The answer doesn't meet the requirements. (${question.validate.replace(':', '-')})`
        } else {
            error = ""
            errorText = ""
        }
    }
    function log(e) {
        // console.log(e.target.value)
        answer.answer = Number(e.target.value)
    }
    function checkbox(e) {
        if (checkboxes.length == 0) {
            for (let i in question.options.optionsData) {
                checkboxes.push(false)
            }
        }
        if (checkboxes[Number(e.target.value)]) {
            checkboxes[Number(e.target.value)] = false
        } else {
            checkboxes[Number(e.target.value)] = true
        }
        answer.answer = checkboxes
    }
</script>

<!-- {JSON.stringify(question)} -->

<article class="border question-box">
    <h6>{question.question}</h6>
    <p class="description">{question.prompt || ''}</p>
    {#if question.type == "short_answer"}
    <div class="field border {error}">
        <input type="text" placeholder={question.placeholder || ''} bind:value={answer.answer} on:input={check}>
        <span class="error">{errorText}</span>
        <p class="answerLength helper">{answer.answer.length}</p>
      </div>
    {/if}
    {#if question.type == "paragraph"}
    
    <div class="field textarea border {error}">
        <textarea spellcheck="false" bind:value={answer.answer} on:input={check}></textarea>
        <span class="error">{errorText}</span>
        <p class="answerLength helper">{answer.answer.length}</p>
    </div>
    {/if}
    {#if question.type == "multiple"}
    <div class="multiple-choice">
        {#each question.options.optionsData as opt, index}
        <label class="radio">
            <input type="radio" on:change={log} bind:value={index} name={'radio_group_' + question.id }>
            <span>{opt}</span>
        </label><br>
        {/each}
    </div> 
    {/if}
    {#if question.type == 'dropdown'}
    <div class="field label suffix border">
        <select bind:value={answer.answer}>
            {#each question.options.optionsData as opt, index}
            <option value={index}>{opt}</option>
            {/each}
        </select>
        <label>Select</label>
        <i>arrow_drop_down</i>
      </div>
    {/if}
    {#if question.type == "checkboxes"}
    <div class="multiple-choice">
        {#each question.options.optionsData as opt, index}
        <label class="checkbox">
            <input type="checkbox" on:change={checkbox} bind:value={index} name={'checkboxes_' + question.id }>
            <span>{opt}</span>
        </label><br>
        {/each}
    </div> 
    {/if}
</article>
<style scoped>
	@import "beercss/dist/cdn/beer.min.css";
    .description {
      opacity: .8;
    }
    .question-box {
        margin: 1rem 0;
    }
    .helper.answerLength {
        text-align: right;
        width: 90%;
        padding-top: 0.65rem;
    }
    .multiple-choice {
        margin-top: 1rem;
    }
</style>
