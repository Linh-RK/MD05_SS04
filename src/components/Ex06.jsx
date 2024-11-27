import React, { useEffect, useState } from "react";

export default function Ex06() {
  // Tạo component <Scroll />
  // Trong component đó, tạo một thẻ <p> và sử dụng cú pháp lorem*50 để tạo ra một đoạn văn bản ngẫu nhiên
  // Lắng nghe sự kiện cuộn màn hình, lấy ra vị trí mà người dùng cuộn màn hình và hiển thị chỉ số đó lên trên tiêu đề của tab trình duyệt
  const [position, setPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
      document.title = position;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [position]);
  return (
    <>
      <h2>Vị trí cuộn : {position}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat alias
        nesciunt sint asperiores magni voluptas minus minima, accusantium quis
        ea tempore dolores beatae blanditiis reiciendis aliquam dolore fugit
        repudiandae magnam. Quos impedit odio nemo, saepe suscipit pariatur
        officiis ex laborum dolores ipsum ipsa vero. Ducimus aut autem itaque
        facere commodi, perferendis doloribus aspernatur totam error praesentium
        et similique hic quas. Totam minus expedita, culpa dolorum animi
        accusamus tenetur quo corrupti. Mollitia itaque facilis dolorum numquam
        tenetur similique explicabo officia labore harum ut animi eligendi totam
        accusamus tempora, fugiat sint debitis! Perspiciatis illum, omnis quis
        fuga expedita nesciunt eius tempora? Odio iusto consectetur libero vel
        nostrum et magnam dolor sit reiciendis, ducimus id. Ipsum itaque facere
        rerum, quisquam sapiente iste autem. Fugiat enim ullam nemo omnis in
        animi, ut, similique, minus iusto impedit mollitia. Id placeat illum ab
        ex dolorum, modi, sed asperiores recusandae temporibus itaque ipsam
        tempore, molestiae quaerat praesentium. Nisi, amet illum dicta fugit,
        cum, repellendus necessitatibus consequatur asperiores eligendi illo
        praesentium blanditiis distinctio obcaecati doloribus tempore. Cum,
        laudantium esse! Possimus, maxime provident. Magnam aliquid hic earum
        laborum rem! Quasi corrupti debitis quaerat aspernatur iusto error unde
        ipsa, corporis iste veritatis reprehenderit illum, consequuntur eligendi
        numquam. Laboriosam, aspernatur, eaque minima consequatur, voluptate
        minus magnam accusantium assumenda accusamus expedita sapiente?
        Doloribus rerum eligendi incidunt ex dolores eos quidem itaque odio
        aspernatur vel earum libero soluta perferendis esse, reprehenderit
        repudiandae aperiam fugit dolore numquam voluptas rem officiis possimus
        voluptatem! Excepturi, rerum? Obcaecati, vero similique tenetur animi
        incidunt porro error minima iusto, voluptate nihil ullam sit fugiat
        provident esse velit eaque vel veritatis eveniet reprehenderit! Mollitia
        enim omnis rem tempore voluptatum aperiam! Reiciendis facere cumque
        beatae hic ad esse facilis exercitationem aspernatur dicta perferendis,
        possimus mollitia minus. Qui adipisci asperiores totam dolores iste,
        nemo, quaerat quibusdam deleniti placeat, veniam sequi aperiam sit.
        Blanditiis veritatis molestias vel illum, minima enim et temporibus
        accusamus mollitia, asperiores error. Reiciendis saepe dolores tenetur!
        Necessitatibus animi culpa perferendis commodi obcaecati. Dignissimos ab
        rem, est repellendus assumenda ipsa? Laudantium illum sunt sit
        dignissimos eligendi. Asperiores sunt voluptatem ut voluptates facere
        amet dolores tempore est eaque iure reiciendis, aliquid iusto
        dignissimos, nam quasi totam libero ad! At, temporibus modi. Quas quae
        alias aliquam expedita delectus nemo placeat maiores molestiae ea
        doloremque? Animi itaque cum, dignissimos iusto nulla assumenda
        repellat, quod dolor ipsa magni rem quos atque! Dolorem, debitis
        provident. Ipsam nobis quos, dolorem quam neque alias molestias expedita
        tempore dolor repellendus eligendi odio vitae eius cupiditate quisquam
        placeat ut asperiores pariatur laboriosam deleniti incidunt sed
        exercitationem! Aliquam, deserunt eaque. Temporibus, voluptatum
        voluptatibus consequuntur consequatur accusamus aliquam explicabo
        nesciunt ratione accusantium. Iste ipsam a aspernatur in eaque aliquid
        similique natus suscipit nulla sit minima alias repudiandae dignissimos,
        animi quisquam excepturi! Perspiciatis voluptates enim rerum suscipit?
        Ducimus, eos cumque neque cum sunt laborum quibusdam nemo aperiam
        praesentium consectetur recusandae numquam explicabo laboriosam iure
        tempora maxime? Voluptatibus rem earum quo perferendis voluptatem. Nulla
        id veritatis architecto minima quasi ipsum dolorem soluta porro sunt
        voluptas. Veniam hic architecto quam voluptate voluptatum repellendus
        tempora placeat dolorum quibusdam laboriosam necessitatibus eveniet
        ipsam possimus, et eum! Commodi, error dolores! Explicabo sed nam
        corporis quod cupiditate eos! Nemo placeat sunt deserunt numquam, iste
        pariatur assumenda recusandae eveniet provident perferendis dicta vel ex
        sed repudiandae? Obcaecati, labore maiores! Aliquam eius velit nostrum
        dolores, rem ipsa? Voluptas autem quisquam similique nulla non vitae
        expedita saepe dignissimos consequuntur culpa sint quae sapiente totam
        fugiat voluptatum praesentium, corrupti rerum quas sequi? Rerum omnis,
        eligendi recusandae impedit modi eum fuga a dolor, nesciunt laboriosam,
        cupiditate tempora consequuntur quaerat rem temporibus et aperiam
        officia corporis dolorem placeat libero id ipsam. Atque, repellendus
        esse. Modi esse nemo error, rem eius provident quod hic odio voluptas
        quidem consequuntur, reiciendis non recusandae. Omnis neque illo magnam
        similique ipsam ducimus placeat vero adipisci reiciendis, porro a esse?
        Cupiditate ullam dolorum dolores modi eaque, facilis corrupti
        dignissimos, sit quaerat fugit adipisci labore quia architecto nulla
        laborum tempore praesentium dolore eveniet pariatur reprehenderit
        quidem. Neque asperiores tenetur similique magnam. Aliquid nam vero quos
        cupiditate qui quaerat fugiat! Repudiandae, a ipsum, minus, nemo sint
        perferendis nostrum iure provident commodi optio consectetur recusandae
        similique quis! Adipisci repellendus assumenda eos enim totam? Aperiam,
        harum, quisquam facilis, dolores mollitia aliquam autem temporibus
        dignissimos ipsam repellat repellendus nisi itaque omnis tenetur.
        Reiciendis quisquam expedita facere ullam quasi architecto nisi in ex
        maiores, accusamus inventore. Voluptate officiis nisi pariatur
        praesentium assumenda architecto omnis sit fugiat et in maiores culpa
        voluptatem eius iusto corporis, provident, id debitis vero quaerat
        laudantium? Cumque doloribus autem fuga quae iure. Incidunt excepturi
        dicta corporis cupiditate ullam, eum officiis labore. Quasi esse veniam
        corporis soluta obcaecati nulla aliquid assumenda, aut, error placeat
        nobis veritatis quaerat totam eius. Pariatur animi non impedit. Magni
        sunt aliquam iusto saepe inventore nulla? Laborum doloremque a
        voluptatibus, expedita assumenda temporibus officiis veritatis culpa
        alias ratione, consectetur reprehenderit facere veniam! Adipisci, quam
        ut veritatis rem libero molestiae! Asperiores consequatur provident
        molestias odio nihil, omnis tenetur. Labore molestiae dolorum harum,
        atque velit modi amet iure optio dolores similique eveniet, est
        doloremque cupiditate reprehenderit libero consectetur! Consequuntur,
        quia officia. Amet libero optio officiis unde nam ratione aut minima
        blanditiis, qui cupiditate id voluptatibus, sequi numquam, esse fugit!
        Totam rem iusto natus. Magnam dicta optio vitae sit, nam amet quam.
        Animi autem voluptatibus placeat omnis commodi repellendus culpa
        dolorem, officiis eius libero, ab mollitia tenetur. Magni suscipit
        dolores, atque dicta blanditiis alias, odio, expedita nulla accusantium
        autem rem iure minus. Illum sequi mollitia quasi? Ea, harum, aut commodi
        deleniti quidem expedita reiciendis veniam vitae dolorum dicta maxime
        molestiae velit tempora, quis obcaecati culpa. Assumenda modi eligendi
        tenetur, aliquam dolores reiciendis. Voluptatum cum iusto ab, tempore
        laboriosam nisi magni delectus, dicta minima, dolor vero odit ratione?
        Ullam esse, officia possimus commodi modi impedit aperiam laborum
        necessitatibus minus a laudantium recusandae aliquam! Laboriosam,
        repellat rerum soluta ipsum officiis blanditiis dolore doloremque natus!
        Neque, ea. Quos dolores illo hic molestiae minus consequuntur facere
        aperiam, animi sit possimus asperiores nisi beatae voluptatem suscipit
        error! Laboriosam ea saepe iste nisi quos provident? Nemo soluta
        perspiciatis quos ducimus necessitatibus cum asperiores perferendis
        saepe, alias magnam rerum officia temporibus, id explicabo autem eveniet
        velit consequatur qui quod! Corporis dolorem reiciendis facere sequi
        odio quod dolor impedit temporibus dolorum dignissimos sint quibusdam
        alias totam hic maiores ea rerum nulla ipsa nemo repudiandae officiis,
        quo natus corrupti? Consectetur, numquam. Quibusdam, dolorem maiores
        ducimus recusandae ea voluptas. Nobis hic cupiditate sapiente laboriosam
        totam nam nesciunt magni fuga. Deserunt laboriosam, tempore asperiores,
        corrupti unde amet dignissimos quia incidunt ea laudantium placeat. Quae
        aliquam sunt aperiam perspiciatis quisquam distinctio maxime
        necessitatibus magnam officia, deserunt officiis accusamus soluta quas.
        Quae, adipisci. Soluta excepturi iure magni ipsam laudantium perferendis
        cum dolorum commodi similique! Saepe? Ipsa optio vero tempora ipsum
        earum error natus molestiae quibusdam vel distinctio. Dolore explicabo
        vero delectus. Iure, nulla. Minima id suscipit tempore eligendi? Facere
        nisi dolorum, soluta commodi dolores necessitatibus? Tempora soluta a
        adipisci error accusantium unde vero cumque, nobis dolor blanditiis
        reprehenderit perspiciatis doloremque, temporibus commodi sint
        voluptatibus excepturi nemo minima, consequatur voluptates non sapiente
        est! Quos, rem saepe. Laboriosam, voluptatem quidem? Excepturi sint
        doloremque quos sunt repellendus, necessitatibus dolores hic voluptas
        nisi, deserunt ab nesciunt animi molestiae tenetur assumenda minima,
        culpa totam. Dolores fuga quam ad magnam ex. Quas fugiat magnam a
        officia atque veritatis molestias ipsum alias qui eveniet dicta
        quibusdam et animi consectetur similique voluptates illo consequatur
        tenetur quisquam, ad molestiae error provident nulla doloremque! Iusto!
        Accusamus vero cumque, sapiente qui temporibus nemo id provident magni
        dolores officia molestias, soluta commodi rem dicta eligendi blanditiis
        voluptatem eaque quam ipsum ducimus at. Voluptas sed et non quibusdam.
        Quae voluptate, dolores reiciendis obcaecati incidunt in voluptas dolore
        deleniti repellendus nulla illum ad. Aspernatur eaque error earum cumque
        dolor nostrum fuga doloremque autem quasi asperiores. A atque nulla
        unde! Nisi commodi animi reiciendis dolorem vero, est fugit voluptatibus
        omnis voluptates ad eos iusto odit qui iure ipsum minima aliquam nihil
        eum, tempore, recusandae expedita officia quo? Obcaecati, dolor tenetur.
        Modi, laboriosam nemo! Accusantium quaerat odio soluta eaque sunt nobis
        deleniti rem fugit. Fugit, velit sapiente exercitationem corporis,
        eveniet, rem veniam debitis quaerat voluptatum ratione reprehenderit.
        Deleniti nisi rem est? Assumenda perspiciatis, harum et vero voluptatem
        tenetur blanditiis quis earum temporibus tempore ad voluptatibus libero
        rerum voluptates aliquam sequi magni suscipit incidunt laborum eaque
        fuga eligendi! Ducimus nobis asperiores minus? Vero voluptate, unde,
        soluta delectus placeat dolor beatae harum eligendi esse molestiae rem
        tempore. Eum eligendi sapiente debitis similique tempora. Saepe
        dignissimos possimus porro autem voluptatem officiis ut suscipit
        expedita! Repudiandae ipsa minima dolores, assumenda blanditiis
        consequuntur deserunt recusandae eaque accusamus quasi molestias eos
        aliquid at beatae aliquam vitae? Molestiae laudantium quaerat quibusdam
        possimus molestias eius, quia esse incidunt quo. Quam saepe, minima
        aperiam facilis voluptate sint a, cupiditate tempore pariatur reiciendis
        nostrum eaque delectus quod libero doloribus, hic iure repellat quia
        odit voluptas ad culpa quidem dolorum! Et, sequi! Vero dolores optio,
        accusamus, velit laborum tempora, voluptatum modi est omnis magnam
        tenetur. Asperiores consectetur porro quae, culpa vitae, tempora
        molestiae voluptatibus reprehenderit est eligendi temporibus eaque
        provident ducimus labore.
      </p>
      <hr />
    </>
  );
}
