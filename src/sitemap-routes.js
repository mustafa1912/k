import { Sitemap } from 'react-router-sitemap';
import { createMemoryHistory } from 'history';
import Routes from './App.jsx'; // قم بتعديل المسار إلى مسار ملف التوجيه الخاص بك

const history = createMemoryHistory();
const sitemap = new Sitemap(Routes(history)).build('https://kfs-hiet.edu.eg');

// يمكنك استخدام `fs` لكتابة الملف، أو طباعته مباشرةً، أو نقله إلى مجلد public في تطبيق React.
console.log(sitemap);
