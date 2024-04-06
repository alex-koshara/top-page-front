import style from './page.module.css'
import { Metadata } from 'next';
import {Layout, withLayout} from './../layout/Layout'

export const metadata: Metadata = {
  title: "Main page",
  description: "Generated by create next app"
};

function Home() {
  
  return (
    <>
      Главная страница
    </>
  );
}

export default withLayout(Home);