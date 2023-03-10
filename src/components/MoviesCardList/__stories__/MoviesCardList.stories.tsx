/* eslint-disable react/function-component-definition */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MoviesCardList } from '../MoviesCardList';

export default {
  title: 'Example/MoviesCardList',
  component: MoviesCardList,
  argTypes: {
    onSaveFilm: { action: 'clicked' },
    onDeleteFilm: { action: 'clicked' },
  },
} as ComponentMeta<typeof MoviesCardList>;

const Template: ComponentStory<typeof MoviesCardList> = args => {
  return (
    <div
      style={{
        height: '100%',
        paddingBottom: '50px',
        display: 'flex',
        alignItems: 'center',
      }}>
      <MoviesCardList
        {...args}
        items={[
          {
            id: 2,
            nameRU: "All Tomorrow's Parties",
            nameEN: "All Tomorrow's Parties",
            director: ' Джонатан Кауэтт',
            country: 'Великобритания',
            year: '2009',
            duration: 82,
            description:
              // eslint-disable-next-line max-len
              'Хроники британского фестиваля, который первым нарушил монополию «Гластонбери», «Ридинга» и прочих пивных сборищ в чистом поле — и с тех пор прослыл одним из самых независимых и принципиальных. ATP из года в год проходит на базе отдыха в английской глуши, где артисты и их поклонники живут в одинаковых номерах, не бывает коммерческих спонсоров, программу составляют приглашенные кураторы (в разное время ими были Ник Кейв, Belle & Sebastian, Sonic Youth и даже Мэтт Грейнинг). И, главное, где не любя...',
            trailerLink: '#',
            created_at: '2020-11-23T14:15:19.238Z',
            updated_at: '2020-11-23T14:15:19.238Z',
            image:
              'https://api.nomoreparties.co/uploads/all_tommoros_parties_33a125248d.jpeg',
            thumbnail:
              'https://api.nomoreparties.co/uploads/thumbnail_all_tommoros_parties_33a125248d.jpeg',
            durationText: '1ч 22м',
            isLiked: true,
            buttonType: 'like',
          },
          {
            id: 2,
            nameRU: "All Tomorrow's Parties",
            nameEN: "All Tomorrow's Parties",
            director: ' Джонатан Кауэтт',
            country: 'Великобритания',
            year: '2009',
            duration: 82,
            description:
              // eslint-disable-next-line max-len
              'Хроники британского фестиваля, который первым нарушил монополию «Гластонбери», «Ридинга» и прочих пивных сборищ в чистом поле — и с тех пор прослыл одним из самых независимых и принципиальных. ATP из года в год проходит на базе отдыха в английской глуши, где артисты и их поклонники живут в одинаковых номерах, не бывает коммерческих спонсоров, программу составляют приглашенные кураторы (в разное время ими были Ник Кейв, Belle & Sebastian, Sonic Youth и даже Мэтт Грейнинг). И, главное, где не любя...',
            trailerLink: '#',
            created_at: '2020-11-23T14:15:19.238Z',
            updated_at: '2020-11-23T14:15:19.238Z',
            image:
              'https://api.nomoreparties.co/uploads/all_tommoros_parties_33a125248d.jpeg',
            thumbnail:
              'https://api.nomoreparties.co/uploads/thumbnail_all_tommoros_parties_33a125248d.jpeg',
            durationText: '1ч 22м',
            isLiked: true,
            buttonType: 'like',
          },
          {
            id: 2,
            nameRU: "All Tomorrow's Parties",
            nameEN: "All Tomorrow's Parties",
            director: ' Джонатан Кауэтт',
            country: 'Великобритания',
            year: '2009',
            duration: 82,
            description:
              // eslint-disable-next-line max-len
              'Хроники британского фестиваля, который первым нарушил монополию «Гластонбери», «Ридинга» и прочих пивных сборищ в чистом поле — и с тех пор прослыл одним из самых независимых и принципиальных. ATP из года в год проходит на базе отдыха в английской глуши, где артисты и их поклонники живут в одинаковых номерах, не бывает коммерческих спонсоров, программу составляют приглашенные кураторы (в разное время ими были Ник Кейв, Belle & Sebastian, Sonic Youth и даже Мэтт Грейнинг). И, главное, где не любя...',
            trailerLink: '#',
            created_at: '2020-11-23T14:15:19.238Z',
            updated_at: '2020-11-23T14:15:19.238Z',
            image:
              'https://api.nomoreparties.co/uploads/all_tommoros_parties_33a125248d.jpeg',
            thumbnail:
              'https://api.nomoreparties.co/uploads/thumbnail_all_tommoros_parties_33a125248d.jpeg',
            durationText: '1ч 22м',
            isLiked: true,
            buttonType: 'like',
          },
          {
            id: 2,
            nameRU: "All Tomorrow's Parties",
            nameEN: "All Tomorrow's Parties",
            director: ' Джонатан Кауэтт',
            country: 'Великобритания',
            year: '2009',
            duration: 82,
            description:
              // eslint-disable-next-line max-len
              'Хроники британского фестиваля, который первым нарушил монополию «Гластонбери», «Ридинга» и прочих пивных сборищ в чистом поле — и с тех пор прослыл одним из самых независимых и принципиальных. ATP из года в год проходит на базе отдыха в английской глуши, где артисты и их поклонники живут в одинаковых номерах, не бывает коммерческих спонсоров, программу составляют приглашенные кураторы (в разное время ими были Ник Кейв, Belle & Sebastian, Sonic Youth и даже Мэтт Грейнинг). И, главное, где не любя...',
            trailerLink: '#',
            created_at: '2020-11-23T14:15:19.238Z',
            updated_at: '2020-11-23T14:15:19.238Z',
            image:
              'https://api.nomoreparties.co/uploads/all_tommoros_parties_33a125248d.jpeg',
            thumbnail:
              'https://api.nomoreparties.co/uploads/thumbnail_all_tommoros_parties_33a125248d.jpeg',
            durationText: '1ч 22м',
            isLiked: true,
            buttonType: 'like',
          },
        ]}
      />
    </div>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  // id: 2,
  // nameRU: "All Tomorrow's Parties",
  // nameEN: "All Tomorrow's Parties",
  // director: ' Джонатан Кауэтт',
  // country: 'Великобритания',
  // year: '2009',
  // duration: 82,
  // description:
  //   // eslint-disable-next-line max-len
  //   'Хроники британского фестиваля, который первым нарушил монополию «Гластонбери», «Ридинга» и прочих пивных сборищ в чистом поле — и с тех пор прослыл одним из самых независимых и принципиальных. ATP из года в год проходит на базе отдыха в английской глуши, где артисты и их поклонники живут в одинаковых номерах, не бывает коммерческих спонсоров, программу составляют приглашенные кураторы (в разное время ими были Ник Кейв, Belle & Sebastian, Sonic Youth и даже Мэтт Грейнинг). И, главное, где не любя...',
  // trailerLink: '#',
  // created_at: '2020-11-23T14:15:19.238Z',
  // updated_at: '2020-11-23T14:15:19.238Z',
  // image:
  //   'https://api.nomoreparties.co/uploads/all_tommoros_parties_33a125248d.jpeg',
  // thumbnail:
  //   'https://api.nomoreparties.co/uploads/thumbnail_all_tommoros_parties_33a125248d.jpeg',
  // durationText: '1ч 22м',
  // isLiked: true,
  // buttonType: 'like',
};
