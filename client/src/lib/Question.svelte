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
</style>
