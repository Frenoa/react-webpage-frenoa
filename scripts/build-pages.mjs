import { readFile, mkdir, writeFile } from 'node:fs/promises'

const template = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8')
const pages = [
  ['about', '브랜드 이야기', 'Fresh · Nature · Origin · Agriculture. 신선함의 근원은 자연과 바른 농업에 있습니다. 프레노아의 이름과 철학을 소개합니다.'],
  ['services', '서비스', '자연을 이해하는 기술, 바르게 키우는 마음. 프레노아의 스마트팜 재배와 생육 관리, 먹거리의 가치 전달을 소개합니다.'],
  ['products', '우리의 제품', '자연 본연의 맛과 바른 재배를 생각하는 프레노아. 제품에 담을 약속과 앞으로의 제품 소식을 안내합니다.'],
]

for (const [path, title, description] of pages) {
  const directory = new URL(`../dist/${path}/`, import.meta.url)
  await mkdir(directory, { recursive: true })
  const html = template
    .replace(/<title>.*?<\/title>/, `<title>${title} | FRENOA</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${description}" />`)
  await writeFile(new URL('index.html', directory), html)
}
await writeFile(new URL('../dist/404.html', import.meta.url), template.replace(/<title>.*?<\/title>/, '<title>페이지를 찾을 수 없습니다 | FRENOA</title>'))
console.log('Created standalone entry pages: /about, /services, /products and 404')
