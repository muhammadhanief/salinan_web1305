import React from "react";
import { LoremIpsum } from "lorem-ipsum";
import SkeletonParallax from "../skeletonParallax";

const fourthParallax = () => {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });
  // let text = lorem.generateParagraphs(1);
  const text = [
    "Kemiskinan adalah masalah global yang mengakar dan mempengaruhi jutaan orang di seluruh dunia. Ini adalah masalah multidimensi yang mencakup faktor ekonomi, sosial dan politik. Meskipun penyebab dan akibat kemiskinan berbeda-beda di berbagai wilayah dan negara, pemahaman terhadap kompleksitas kemiskinan sangatlah penting untuk mengembangkan strategi yang efektif dalam pengentasan kemiskinan.",
    "Kemiskinan dapat didefinisikan sebagai keadaan kekurangan dimana individu atau rumah tangga kekurangan sumber daya dan kemampuan yang diperlukan untuk memenuhi kebutuhan dasar mereka dan menikmati standar hidup yang layak. Kebutuhan dasar tersebut meliputi akses terhadap pangan, air bersih, pendidikan, layanan kesehatan, dan tempat tinggal.",
    "Penyebab kemiskinan mempunyai banyak segi dan saling berkaitan. Faktor ekonomi, seperti kurangnya kesempatan kerja, rendahnya upah, dan ketimpangan distribusi kekayaan, mempunyai peranan penting dalam melanggengkan kemiskinan. Faktor sosial, termasuk diskriminasi, marginalisasi, dan sistem perlindungan sosial yang tidak memadai, semakin memperburuk masalah ini.",
    "Di negara-negara berkembang, faktor-faktor seperti ketidakstabilan politik, korupsi, dan infrastruktur yang tidak memadai menghambat pertumbuhan ekonomi dan berkontribusi terhadap kemiskinan yang terus-menerus. Selain itu, faktor lingkungan, seperti bencana alam dan perubahan iklim, dapat memberikan dampak yang tidak proporsional terhadap masyarakat rentan dan semakin mendorong mereka ke dalam jurang kemiskinan.",
    "Kemiskinan adalah masalah yang terus menghantui masyarakat di seluruh dunia, termasuk Indonesia. Dengan populasi lebih dari 270 juta orang, Indonesia adalah negara terpadat keempat di dunia. Meskipun negara ini telah mencapai kemajuan signifikan dalam pembangunan ekonomi selama beberapa dekade terakhir, kemiskinan masih menjadi perhatian utama bagi para pembuat kebijakan dan masyarakat. Dalam artikel ini, kita akan mengupas tentang bagaimana kemiskinan di ukur dengan memahami tata cara penentuan garis kemiskinan, kedalaman kemiskinan, dan keparahan kemiskinan beserta interpretasi dari data yang dihasilkan.",
  ];

  return (
    <SkeletonParallax
      text={text}
      titleParallax="Mengukur Kemiskinan"
      color="black"
      bg="bg-bg4"
      bgHero="bg-hero4"
    ></SkeletonParallax>
  );
};

export default fourthParallax;
