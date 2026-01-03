<h1 data-start="304" data-end="312">FileCo</h1>
<p data-start="314" data-end="488"><strong data-start="314" data-end="324">FileCo</strong> is an internal, self-hosted file processing platform designed to provide PDF and document utilities (similar to iLovePDF) <strong data-start="447" data-end="487">without relying on external services</strong>.</p>
<p data-start="490" data-end="692">It is built for organizations that block public file tools for <strong data-start="553" data-end="603">security, compliance, and data-privacy reasons</strong>, allowing employees to safely process documents <strong data-start="652" data-end="691">entirely inside the company network</strong>.</p>
<hr data-start="694" data-end="697">
<h2 data-start="699" data-end="722">✨ Features (Planned)</h2>
<h3 data-start="724" data-end="737">PDF Tools</h3>
<ul data-start="738" data-end="899">
<li data-start="738" data-end="750">
<p data-start="740" data-end="750">Merge PDFs</p>
</li>
<li data-start="751" data-end="784">
<p data-start="753" data-end="784">Split PDFs (by pages or ranges)</p>
</li>
<li data-start="785" data-end="811">
<p data-start="787" data-end="811">Compress / optimize PDFs</p>
</li>
<li data-start="812" data-end="847">
<p data-start="814" data-end="847">Rotate, reorder, and delete pages</p>
</li>
<li data-start="848" data-end="882">
<p data-start="850" data-end="882">Add / remove password protection</p>
</li>
<li data-start="883" data-end="899">
<p data-start="885" data-end="899">Watermark PDFs</p>
</li>
</ul>
<h3 data-start="901" data-end="916">Conversions</h3>
<ul data-start="917" data-end="977">
<li data-start="917" data-end="950">
<p data-start="919" data-end="950">Word / Excel / PowerPoint → PDF</p>
</li>
<li data-start="951" data-end="977">
<p data-start="953" data-end="977">PDF → Images (PNG / JPG)</p>
</li>
</ul>
<h3 data-start="979" data-end="1000">Advanced (Future)</h3>
<ul data-start="1001" data-end="1124">
<li data-start="1001" data-end="1034">
<p data-start="1003" data-end="1034">OCR (scanned PDFs → searchable)</p>
</li>
<li data-start="1035" data-end="1071">
<p data-start="1037" data-end="1071">Redaction (permanent text removal)</p>
</li>
<li data-start="1072" data-end="1090">
<p data-start="1074" data-end="1090">Batch processing</p>
</li>
<li data-start="1091" data-end="1124">
<p data-start="1093" data-end="1124">Audit logs &amp; retention policies</p>
</li>
</ul>
<hr data-start="1126" data-end="1129">
<h2 data-start="1131" data-end="1148">🔐 Why FileCo?</h2>
<ul data-start="1150" data-end="1374">
<li data-start="1150" data-end="1181">
<p data-start="1152" data-end="1181">🚫 No external SaaS uploads</p>
</li>
<li data-start="1182" data-end="1230">
<p data-start="1184" data-end="1230">🏢 Runs entirely inside the company firewall</p>
</li>
<li data-start="1231" data-end="1281">
<p data-start="1233" data-end="1281">🔒 Sensitive documents never leave the network</p>
</li>
<li data-start="1282" data-end="1337">
<p data-start="1284" data-end="1337">🧾 Audit-friendly (logs, retention, access control)</p>
</li>
<li data-start="1338" data-end="1374">
<p data-start="1340" data-end="1374">⚡ Faster workflows for employees</p>
</li>
</ul>
<hr data-start="1376" data-end="1379">
<h2 data-start="1381" data-end="1409">🏗️ Architecture Overview</h2>
<p data-start="1411" data-end="1482">FileCo is a <strong data-start="1423" data-end="1435">monorepo</strong> containing both frontend and backend services.</p>
<pre class="overflow-visible! px-0!" data-start="1484" data-end="1652"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>FileCo/
├── frontend/   </span><span><span class="hljs-comment"># React + Vite (TypeScript)</span></span><span>
├── backend/    </span><span><span class="hljs-comment"># NestJS API (TypeScript)</span></span><span>
├── docker/     </span><span><span class="hljs-comment"># Worker containers (PDF processing)</span></span><span>
└── README.md
</span></span></code></div></div></pre>
<h3 data-start="1654" data-end="1673">High-level flow</h3>
<ol data-start="1674" data-end="1868">
<li data-start="1674" data-end="1713">
<p data-start="1677" data-end="1713">User uploads a file via the frontend</p>
</li>
<li data-start="1714" data-end="1750">
<p data-start="1717" data-end="1750">Backend validates &amp; creates a job</p>
</li>
<li data-start="1751" data-end="1804">
<p data-start="1754" data-end="1804">Worker processes the file in an isolated container</p>
</li>
<li data-start="1805" data-end="1868">
<p data-start="1808" data-end="1868">Result is returned and auto-deleted after a retention period</p>
</li>
</ol>
<hr data-start="1870" data-end="1873">
<h2 data-start="1875" data-end="1891">🧰 Tech Stack</h2>
<h3 data-start="1893" data-end="1905">Frontend</h3>
<ul data-start="1906" data-end="1975">
<li data-start="1906" data-end="1913">
<p data-start="1908" data-end="1913">React</p>
</li>
<li data-start="1914" data-end="1920">
<p data-start="1916" data-end="1920">Vite</p>
</li>
<li data-start="1921" data-end="1933">
<p data-start="1923" data-end="1933">TypeScript</p>
</li>
<li data-start="1934" data-end="1975">
<p data-start="1936" data-end="1975">Modern, minimal UI inspired by iLovePDF</p>
</li>
</ul>
<h3 data-start="1977" data-end="1988">Backend</h3>
<ul data-start="1989" data-end="2043">
<li data-start="1989" data-end="1997">
<p data-start="1991" data-end="1997">NestJS</p>
</li>
<li data-start="1998" data-end="2010">
<p data-start="2000" data-end="2010">TypeScript</p>
</li>
<li data-start="2011" data-end="2021">
<p data-start="2013" data-end="2021">REST API</p>
</li>
<li data-start="2022" data-end="2043">
<p data-start="2024" data-end="2043">Job queue (planned)</p>
</li>
</ul>
<h3 data-start="2045" data-end="2074">File Processing (Workers)</h3>
<ul data-start="2075" data-end="2268">
<li data-start="2075" data-end="2107">
<p data-start="2077" data-end="2107"><code data-start="2077" data-end="2083">qpdf</code> – merge, split, encrypt</p>
</li>
<li data-start="2108" data-end="2152">
<p data-start="2110" data-end="2152"><code data-start="2110" data-end="2123">Ghostscript</code> – compression &amp; optimization</p>
</li>
<li data-start="2153" data-end="2194">
<p data-start="2155" data-end="2194"><code data-start="2155" data-end="2179">LibreOffice (headless)</code> – Office → PDF</p>
</li>
<li data-start="2195" data-end="2237">
<p data-start="2197" data-end="2237"><code data-start="2197" data-end="2206">Poppler</code> – rendering &amp; image conversion</p>
</li>
<li data-start="2238" data-end="2268">
<p data-start="2240" data-end="2268"><code data-start="2240" data-end="2251">Tesseract</code> – OCR (optional)</p>
</li>
</ul>
<hr data-start="2584" data-end="2587">
<h2 data-start="2589" data-end="2623">🔄 Environment &amp; Security Notes</h2>
<ul data-start="2625" data-end="2809">
<li data-start="2625" data-end="2665">
<p data-start="2627" data-end="2665">Files are intended to be <strong data-start="2652" data-end="2665">temporary</strong></p>
</li>
<li data-start="2666" data-end="2712">
<p data-start="2668" data-end="2712">Automatic cleanup after processing (planned)</p>
</li>
<li data-start="2713" data-end="2754">
<p data-start="2715" data-end="2754">Workers run <strong data-start="2727" data-end="2754">without internet access</strong></p>
</li>
<li data-start="2755" data-end="2809">
<p data-start="2757" data-end="2809">Designed for <strong data-start="2770" data-end="2809">on-prem or private cloud deployment</strong></p>
</li>
</ul>
<hr data-start="2811" data-end="2814">
<h2 data-start="2816" data-end="2829">📌 Roadmap</h2>
<ul class="contains-task-list" data-start="2830" data-end="2983">
<li class="task-list-item" data-start="2830" data-end="2864">
<p data-start="2836" data-end="2864"><input disabled="" type="checkbox"> Job queue &amp; worker isolation</p>
</li>
<li class="task-list-item" data-start="2865" data-end="2894">
<p data-start="2871" data-end="2894"><input disabled="" type="checkbox"> File retention policies</p>
</li>
<li data-start="2895" data-end="2919" class="task-list-item">
<p data-start="2901" data-end="2919"><input disabled="" type="checkbox"> SSO authentication</p>
</li>
<li class="task-list-item" data-start="2920" data-end="2941">
<p data-start="2926" data-end="2941"><input disabled="" type="checkbox"> Admin dashboard</p>
</li>
<li data-start="2942" data-end="2983" class="task-list-item">
<p data-start="2948" data-end="2983"><input disabled="" type="checkbox"> Docker Compose / Kubernetes support</p>
</li>
</ul>
<hr data-start="2985" data-end="2988">
<h2 data-start="2990" data-end="3003">📄 License</h2>
<p data-start="3004" data-end="3080">Internal use only.<br data-start="3022" data-end="3025">
Licensing to be defined based on organizational policy.</p>
<hr data-start="3082" data-end="3085">
<h2 data-start="3087" data-end="3099">👤 Author</h2>
<p data-start="3100" data-end="3154">Built as an internal productivity &amp; security solution.</p>
</div>