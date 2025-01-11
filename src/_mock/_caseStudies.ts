import { CONFIG } from 'src/global-config';

import { _mock } from './_mock';
import { _tags } from './assets';

// ----------------------------------------------------------------------

const TITLES = [
  `Fradema - Rio de Janeiro`,
  `Fradema - São Paulo`,
  `Fradema - Campinas`,
  `Fradema - Brasília`,
  `Fradema - Salvador`,
  `Fradema - Piraúba`,
  `Fradema - Vitória`,
  `Fradema - Belo Horizonte`,
  `Fradema - Curitiba`,
  `Fradema - Joinville`,
  `Fradema - Recife`,
  `Fradema - Manaus`,
  `Fradema - Zona da Mata`,
  `Fradema - New York`,
  `Fradema - Orlando`,
];

const CONTENT = [`
<h4 class="text-green-600">A Filial, Rio de Janeiro</h4>
<p>Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringilla mauris sit amet nibh. Phasellus viverra nulla ut metus varius laoreet.</p>

<h4 class="text-green-600">Parceiros</h4>

<ul>
    <li>Medical Assistant</li>
    <li>Web Designer</li>
    <li>Dog Trainer</li>
    <li>Nursing Assistant</li>
    <li>President of Sales</li>
</ul>
`,
`<h4 class="text-green-600">A Filial, São Paulo</h4>
<p>Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringilla mauris sit amet nibh. Phasellus viverra nulla ut metus varius laoreet.</p>

<h4 class="text-green-600">Parceiros</h4>

<ul>
    <li>Medical Assistant</li>
    <li>Web Designer</li>
    <li>Dog Trainer</li>
    <li>Nursing Assistant</li>
    <li>President of Sales</li>
</ul>
`,
`<h4 class="text-green-600">A Filial, Campinas</h4>
<p>Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringilla mauris sit amet nibh. Phasellus viverra nulla ut metus varius laoreet.</p>

<h4 class="text-green-600">Parceiros</h4>

<ul>
    <li>Medical Assistant</li>
    <li>Web Designer</li>
    <li>Dog Trainer</li>
    <li>Nursing Assistant</li>
    <li>President of Sales</li>
</ul>
`]
;

// ----------------------------------------------------------------------

const getCategory = (index: number) => {
  if ([1].includes(index)) return _tags[1];
  if ([2].includes(index)) return _tags[2];
  if ([3].includes(index)) return _tags[3];
  if ([4].includes(index)) return _tags[4];
  if ([5].includes(index)) return _tags[5];
  if ([6].includes(index)) return _tags[6];
  if ([7].includes(index)) return _tags[7];
  if ([8].includes(index)) return _tags[8];
  if ([9].includes(index)) return _tags[9];
  if ([10].includes(index)) return _tags[10];
  if ([11].includes(index)) return _tags[11];
  if ([12].includes(index)) return _tags[12];
  if ([13].includes(index)) return _tags[13];
  if ([14].includes(index)) return _tags[14];
  if ([15].includes(index)) return _tags[15];
  return _tags[0];
};

const getGalleryImgs = () => Array.from({ length: 4 }, (_, index) => _mock.image.marketing(index));
// TROCAR

export const _caseStudies = TITLES.map((_, index) => ({
  id: _mock.id(index),
  content: CONTENT[index],
  title: TITLES[index],
  createdAt: _mock.time(index),
  website: 'https://example.com/',
  description: _mock.description(index),
  coverUrl: _mock.image.marketing(index),
  heroUrl: _mock.image.marketingHero(index),
  how_we_work:
    'Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringi',
  results: 'Pellentesque auctor neque nec urna. Sed fringi',
  category: getCategory(index),
  galleryImgs: getGalleryImgs(),
}));
