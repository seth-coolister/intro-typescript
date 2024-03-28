import { ExampleCode } from '../../types/ExampleCode'
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";

hljs.registerLanguage("typescript", typescript);

export class ExampleCodeSnippet implements ExampleCode{
    constructor(
        public title: string,
        public explanation: string,
        public code: string,
    ) {}
    renderCodeSnippet(): string {
        return `<h3 class='text-primary text-xl font-bold mb-4'>
        ${this.title}
        </h3>
        <p class='mb-2 text-slate-300'>${this.explanation}</p>
        <pre class='rounded-lg px-12 py-4 bg-slate-700 text-slate-300'>
        <code class='text-wrap'>${hljs.highlight(this.code, {language:"typescript"}).value}</code>
        </pre>`
    }
}