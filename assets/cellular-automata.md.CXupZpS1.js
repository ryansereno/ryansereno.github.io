import{_ as i,c as s,o as a,M as t}from"./chunks/framework.Dt16nE2a.js";const l="/assets/winged-automata.CETKKRcr.gif",A=JSON.parse('{"title":"Cellular Automata ䷾","description":"","frontmatter":{},"headers":[],"relativePath":"cellular-automata.md","filePath":"cellular-automata.md"}'),e={name:"cellular-automata.md"},h=t('<h1 id="cellular-automata-䷾" tabindex="-1">Cellular Automata ䷾ <a class="header-anchor" href="#cellular-automata-䷾" aria-label="Permalink to &quot;Cellular Automata ䷾&quot;">​</a></h1><p>Date: September 11, 2022</p><p>Why do silicon chips resemble cities? Why dose the structure of neurons resemble the structure of the universe? Why do the murmuring of starlings follow the same patterns as schools of fish?</p><p>The complexity of the natural world arises from a handful of natural laws and atomic elements. The instructions of biological life are not inherently encoded into the universe.</p><p>Rather, life is an <em>emergent</em> phenomenon.</p><p>Amongst the interaction of matter and the laws that govern it, complexity spontaneously arises.</p><p>This concept can be roughly modeled with particle simulations.</p><p>In a simulation, entities- pixels, points, graphs, vertices, etc- are given a set of arbitrary rules. These rules can spontaneously produce order out of a stochastic system.</p><p><img src="'+l+`" alt="winged-automata.gif"></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes catppuccin-macchiato night-owl vp-code"><code><span class="line"><span style="--shiki-light:#8AADF4;--shiki-dark:#82AAFF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">rule</span><span style="--shiki-light:#CAD3F5;--shiki-dark:#D6DEEB;">(</span><span style="--shiki-light:#CAD3F5;--shiki-dark:#D7DBE0;">green</span><span style="--shiki-light:#939AB7;--shiki-dark:#D6DEEB;">,</span><span style="--shiki-light:#CAD3F5;--shiki-dark:#D7DBE0;"> green</span><span style="--shiki-light:#939AB7;--shiki-dark:#D6DEEB;">,</span><span style="--shiki-light:#8BD5CA;--shiki-dark:#C792EA;"> -</span><span style="--shiki-light:#F5A97F;--shiki-dark:#F78C6C;">0.32</span><span style="--shiki-light:#CAD3F5;--shiki-dark:#D6DEEB;">)</span><span style="--shiki-light:#939AB7;--shiki-dark:#D6DEEB;">;</span></span>
<span class="line"><span style="--shiki-light:#8AADF4;--shiki-dark:#82AAFF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">rule</span><span style="--shiki-light:#CAD3F5;--shiki-dark:#D6DEEB;">(</span><span style="--shiki-light:#CAD3F5;--shiki-dark:#D7DBE0;">green</span><span style="--shiki-light:#939AB7;--shiki-dark:#D6DEEB;">,</span><span style="--shiki-light:#CAD3F5;--shiki-dark:#D7DBE0;"> red</span><span style="--shiki-light:#939AB7;--shiki-dark:#D6DEEB;">,</span><span style="--shiki-light:#8BD5CA;--shiki-dark:#C792EA;"> -</span><span style="--shiki-light:#F5A97F;--shiki-dark:#F78C6C;">0.17</span><span style="--shiki-light:#CAD3F5;--shiki-dark:#D6DEEB;">)</span><span style="--shiki-light:#939AB7;--shiki-dark:#D6DEEB;">;</span></span>
<span class="line"><span style="--shiki-light:#8AADF4;--shiki-dark:#82AAFF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">rule</span><span style="--shiki-light:#CAD3F5;--shiki-dark:#D6DEEB;">(</span><span style="--shiki-light:#CAD3F5;--shiki-dark:#D7DBE0;">green</span><span style="--shiki-light:#939AB7;--shiki-dark:#D6DEEB;">,</span><span style="--shiki-light:#CAD3F5;--shiki-dark:#D7DBE0;"> yellow</span><span style="--shiki-light:#939AB7;--shiki-dark:#D6DEEB;">,</span><span style="--shiki-light:#F5A97F;--shiki-dark:#F78C6C;"> 0.34</span><span style="--shiki-light:#CAD3F5;--shiki-dark:#D6DEEB;">)</span><span style="--shiki-light:#939AB7;--shiki-dark:#D6DEEB;">;</span></span>
<span class="line"><span style="--shiki-light:#8AADF4;--shiki-dark:#82AAFF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">rule</span><span style="--shiki-light:#CAD3F5;--shiki-dark:#D6DEEB;">(</span><span style="--shiki-light:#CAD3F5;--shiki-dark:#D7DBE0;">red</span><span style="--shiki-light:#939AB7;--shiki-dark:#D6DEEB;">,</span><span style="--shiki-light:#CAD3F5;--shiki-dark:#D7DBE0;"> red</span><span style="--shiki-light:#939AB7;--shiki-dark:#D6DEEB;">,</span><span style="--shiki-light:#8BD5CA;--shiki-dark:#C792EA;"> -</span><span style="--shiki-light:#F5A97F;--shiki-dark:#F78C6C;">0.1</span><span style="--shiki-light:#CAD3F5;--shiki-dark:#D6DEEB;">)</span><span style="--shiki-light:#939AB7;--shiki-dark:#D6DEEB;">;</span></span>
<span class="line"><span style="--shiki-light:#8AADF4;--shiki-dark:#82AAFF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">rule</span><span style="--shiki-light:#CAD3F5;--shiki-dark:#D6DEEB;">(</span><span style="--shiki-light:#CAD3F5;--shiki-dark:#D7DBE0;">red</span><span style="--shiki-light:#939AB7;--shiki-dark:#D6DEEB;">,</span><span style="--shiki-light:#CAD3F5;--shiki-dark:#D7DBE0;"> green</span><span style="--shiki-light:#939AB7;--shiki-dark:#D6DEEB;">,</span><span style="--shiki-light:#8BD5CA;--shiki-dark:#C792EA;"> -</span><span style="--shiki-light:#F5A97F;--shiki-dark:#F78C6C;">0.34</span><span style="--shiki-light:#CAD3F5;--shiki-dark:#D6DEEB;">)</span><span style="--shiki-light:#939AB7;--shiki-dark:#D6DEEB;">;</span></span>
<span class="line"><span style="--shiki-light:#8AADF4;--shiki-dark:#82AAFF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">rule</span><span style="--shiki-light:#CAD3F5;--shiki-dark:#D6DEEB;">(</span><span style="--shiki-light:#CAD3F5;--shiki-dark:#D7DBE0;">yellow</span><span style="--shiki-light:#939AB7;--shiki-dark:#D6DEEB;">,</span><span style="--shiki-light:#CAD3F5;--shiki-dark:#D7DBE0;"> yellow</span><span style="--shiki-light:#939AB7;--shiki-dark:#D6DEEB;">,</span><span style="--shiki-light:#F5A97F;--shiki-dark:#F78C6C;"> 0.15</span><span style="--shiki-light:#CAD3F5;--shiki-dark:#D6DEEB;">)</span><span style="--shiki-light:#939AB7;--shiki-dark:#D6DEEB;">;</span></span>
<span class="line"><span style="--shiki-light:#8AADF4;--shiki-dark:#82AAFF;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">rule</span><span style="--shiki-light:#CAD3F5;--shiki-dark:#D6DEEB;">(</span><span style="--shiki-light:#CAD3F5;--shiki-dark:#D7DBE0;">yellow</span><span style="--shiki-light:#939AB7;--shiki-dark:#D6DEEB;">,</span><span style="--shiki-light:#CAD3F5;--shiki-dark:#D7DBE0;"> green</span><span style="--shiki-light:#939AB7;--shiki-dark:#D6DEEB;">,</span><span style="--shiki-light:#8BD5CA;--shiki-dark:#C792EA;"> -</span><span style="--shiki-light:#F5A97F;--shiki-dark:#F78C6C;">0.2</span><span style="--shiki-light:#CAD3F5;--shiki-dark:#D6DEEB;">)</span><span style="--shiki-light:#939AB7;--shiki-dark:#D6DEEB;">;</span></span></code></pre></div><p>Some of these organized entities, like in the GIF above, can demonstrate predictable self assembling patterns, mimicking how the natural world arises.</p><p>If you want to try running a particle simulator in your browser, check out <a href="https://github.com/ryansereno/particle-simulator" target="_blank" rel="noreferrer">my Github for the code</a>!</p>`,12),n=[h];function k(p,r,D,o,d,g){return a(),s("div",null,n)}const c=i(e,[["render",k]]);export{A as __pageData,c as default};