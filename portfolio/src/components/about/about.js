import React from "react";
import pictureOfMe from '../../asset/pictureOfMe.jpg';
import Hat from '../../asset/graduate-cap.png';
import translate from "../../asset/language.png";
import puzzle from "../../asset/puzzle.png";
import './about.css';

export default function About () {

    return (
        <div id="About">
            <h2 id="h2About">About Me</h2>

            <div id="mainAbout">
                <img src={pictureOfMe} alt='me'id="ImgMe"/>

                <div id="contente">
                    <div id="divArticle">
                            <article>
                                <img src={Hat} alt='congrat hat' className="IconArticle"/>
                                <h4 className="TXTarticle">FORMATION</h4>
                                <p className="TXTarticle">Web@cademie EPITECH</p>
                            </article>

                            <article>
                                <img src={translate} alt="translate" className="IconArticle"/>
                                <h4 className="TXTarticle">LANGUAGE</h4>
                                <p className="TXTarticle" id="ArticleLanguage">Native speaker of French and good in english</p>
                            </article>

                            <article>
                                <img src={puzzle} alt="" className="IconArticle"/>
                                <h4 className="TXTarticle">HOBBY</h4>
                                <p className="TXTarticle" id="ArticleHobby">Video Game, Sport, skating...</p>
                            </article>
                    </div>
                    <p id="TXTmain">lorem kjnz oznc jpoo,p  opin in oin oin oin oin po hguif jv u ouho bu oug pij pôk,
                    pmnjolphi oclnuzoirnez cizubnibf cozreun f"z'e fv"o' rg "fpezk fjo rgojj "orze f déihe rkdéo'ezkjfojzrn  
                    o ojl odnf czjlr dosnon on oubiyvoulvo vo vouv ouvh</p>
                </div>
            </div>      
        </div>
    );
};