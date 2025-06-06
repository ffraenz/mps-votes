# MP votes

Developed as part of the hackathon [Open Data x Democracy in Action](https://data.public.lu/en/posts/hackathon-open-data-x-democracy-in-action/).

## Data sources

### Sessions and votes

- [La liste des votes (109)](https://data.public.lu/en/datasets/la-liste-des-votes/)

### MP meta data

- [La liste des Députés actifs à la Chambre des Députés du Luxembourg (105)](https://data.public.lu/en/datasets/la-liste-des-deputes-actifs-a-la-chambre-des-deputes-du-luxembourg/)
- [La liste des anciens Députés de la Chambre des Députés du Luxembourg (106)](https://data.public.lu/en/datasets/la-liste-des-anciens-deputes-de-la-chambre-des-deputes-du-luxembourg/)

### Seat plan

Scraped form the CHD website by running the following snippet in the web console:

```js
JSON.stringify(
  Array.from(document.querySelectorAll('[data-seat^="seat-"]'))
    .map(($seat, index) => {
      $seat.innerText = $seat.dataset.seat.substring(5)
      const nameParts = $seat.dataset.originalTitle.split(' ', 2)
      return ({
        id: (index + 1).toString(),
        name: $seat.dataset.originalTitle,
        description: $seat.dataset.content,
        seat: $seat.dataset.seat.substring(5),
        avatarUrl: $seat.dataset.img,
        firstName: nameParts[0],
        lastName: nameParts[1],
        birthDate: null,
        startDate: null,
        endDate: null,
        politicalGroup: null,
        politicalParty: null,
        address: null,
        phone: null,
        email: null
      })
    })
)
```

Websites:

- [Current legistlature](https://www.chd.lu/en/room)
- [Legistlature 2018-2023](https://web.archive.org/web/20230922045859/https://www.chd.lu/en/room)

## Getting Started

Install dependencies:

```bash
npm install --legacy-peer-deps
```

Run the development server:

```bash
npm run dev
```
