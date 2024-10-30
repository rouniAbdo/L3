## Kapitel 2
|Identifierare|	Typ|	Regler|	Analys|
|-------------|----|----------|-------|
|VatManager|	klass|	Classes and objects should have noun or noun phrase names. A class name should not be a verb |	Namnet VATManager är för generiskt och kan skapa oklarhet om klassens exakta funktion. Jag väljer att ändra den till VatManagement, som skulle vara mer informativt |
|addItemToCalculator|	Method|	Methods should have verb or verb phrase names|	addItemToCalculator följer denna regel genom att använda verbet add, vilket visar att den lägger till ett objekt i kalkylatorn. Namnet är beskrivande och tydligt.|
|vatRates|	Variabel|	Variables should have a context.|	vatRates beskriver klart och tydligt vad variabeln innehåller.|
|calculateVATForAllItems| 	Method |	Use Descriptive Names|	Även om namnet är beskrivande och korrekt, är det ganska långt. jag väljer ett kortare namn som calculateTotalVAT för att göra den tydligare och enklare att använda.|
|updateItemDetails|	Method|	The name of a variable, function, or class, should answer all the big questions.|	updateItemDetails är ett bra exempel på ett beskrivande namn, eftersom det tydligt anger att metoden har till syfte att uppdatera detaljerna för ett item.|

----------------------------------

Att tänka noga på namnen på klasser, metoder och variabler är en viktig del av att skriva ren och lättförståelig kod. Genom att titta på de specifika reglerna och hur jag kan använda dem i mitt projekt har jag förstått mer om hur valet av namn påverkar hur lätt koden är att läsa och underhålla.


En av de viktigaste insikterna jag har fått är vikten av att använda specifika och beskrivande namn, särskilt för klasser. Namnet VATManager känns för allmänt och kan göra det oklart vad klassen egentligen gör. Nu förstår jag att ett mer informativt namn, som VatManagement, skulle ge en tydligare bild av klassens syfte och göra koden mer lättförståelig för andra utvecklare. Detta är en viktig lärdom eftersom namnen på klasser fungerar som en sorts dokumentation för vad klassen ska göra.


Det är också viktigt att metoder namnges med verb eller verbfraser för att tydligt visa vad de gör. I mitt fall följer addItemToCalculator denna regel bra och visar tydligt att metoden lägger till ett objekt i kalkylatorn.

Jag har också tänkt på hur viktigt det är att namnen på variabler ger kontext. Namnet vatRates fungerar bra eftersom det direkt förklarar vad variabeln handlar om. Å andra sidan, metoden calculateVATForAllItems, även om den är beskrivande, är ganska lång och kan göras kortare. Denna insikt visar på behovet av att hitta en balans mellan att vara beskrivande och att hålla namnen korta.

----------------------------------
## Kapitel 3
| NAMN & FÖRKLARING | REFLEKTIONER OCH REGLER FRÅN CLEAN CODE|
|-------------------|----------------------------------------|
| **update()** | **Do one thing**
 Den nuvarande update()-metoden bryter mot principen Do One Thing eftersom den uppdaterar flera olika egenskaper hos ett objekt (price, vatRate, quantity, och name). Enligt Clean Code bör varje metod ha ett tydligt ansvar. Ett bättre sätt skulle vara att dela upp metoden i mindre, mer specifika funktioner, till exempel updatePrice(), updateVatRate(), etc. Detta skulle inte bara göra koden lättare att läsa, utan också förbättra underhållet och minska risken för buggar, genom att varje metod kan testas och felsökas separat.|
|**addItem()**| **Function Arguments**
Metoden addItem() tar emot fyra argument (name, price, vatRateKey, och quantity). Enligt kapitel 3 rekommenderas det att hålla antalet argument till ett minimum för att undvika komplexitet och öka läsbarheten. Ett alternativt tillvägagångssätt skulle vara att använda ett objekt för att passera flera argument, vilket gör det tydligare vad varje värde representerar.|
||**Have No Side Effects**
|Dessutom är det viktigt att säkerställa att metoder inte har oönskade bieffekter. Här skulle jag kunna säkerställa att metoden bara lägger till ett objekt utan att på något sätt förändra andra delar av systemet.|
|**CalculateTotalPrice()**|**Small Functions**
Metoden CalculateTotalPrice() gör mer än en sak; den både skapar objekt och beräknar momsen för varje objekt. Detta bryter mot regeln **small**. Genom att bryta ut beräkningslogiken till en separat metod, skulle jag bättre följa principen **Do One Thing**. Dessutom skulle detta göra metoden mer modulär och återanvändbar, vilket underlättar framtida justeringar och testning.|
|**updateItemDetails()**| **Error Handling**
Error-hantering i updateItemDetails() kan förbättras. Även om det nuvarande felmeddelandet är tydligt, rekommenderar Clean Code att inte överbelasta en metod med för mycket logik, särskilt när det gäller felhantering. Istället för att kasta ett undantag direkt om objektet inte hittas, skulle jag kunna bryta ut den logiken till en separat metod, till exempel findItemOrThrow(). Detta skulle följa principen **One Level of Abstraction per Function** och göra metoden mer lättläst.|
|**getTotalWithVAT()** | **Use descriptive names**
Metodens namn, getTotalWithVAT(), följer principen om att använda beskrivande namn. Namnet gör tydligt vad metoden gör, vilket förbättrar kodens läsbarhet och minskar behovet av kommentarer. Ett bra metodnamn är avgörande för att uppnå intention-revealing names, som kapitel 2 poängterar|
## Reflektion Kapitel 3
I kapitel tre har jag insett att flera av mina metoder, såsom update(), gör mer än de borde. Jag planerar att bryta ner dessa metoder i mindre delar för att öka läsbarheten och underlätta underhållet. Jag ser också att jag kan förbättra hur jag hanterar fel genom att säkerställa att alla metoder har bra felhantering. Dessutom, att använda getters och setters kan hjälpa mig att kontrollera tillståndet på ett mer konsekvent sätt

----------------------------------
## Reflektion egen kodkvalitet

När jag ser tillbaka på den kod jag har skrivit, ser jag tydliga områden där jag har försökt följa principer för bra kodkvalitet, men också utrymme för förbättringar.

**Läsbarhet och Struktur**

Jag har fokuserat mycket på att göra min kod lätt att förstå. Detta har inneburit att jag försökt använda tydliga och beskrivande namn för variabler, funktioner och klasser, vilket följer den viktiga principen att kod ska vara "självdokumenterande". När andra (eller jag själv i framtiden) läser koden, ska de inte behöva gissa vad en variabel gör eller vad en metod ansvarar för. Ett konkret exempel är metoden getTotalWithVAT(), där namnet tydligt indikerar vad den gör. Däremot kan vissa namn, som addItem(), förbättras genom att bättre spegla metodens syfte och hantering av flera argument, vilket kan öka läsbarheten ytterligare.

**Small functions** och **Do One Thing**

En av de största utmaningarna jag identifierat i min kod är att vissa funktioner gör för mycket. Till exempel bryter metoden CalculateTotalPrice() mot principen att en funktion ska göra en sak (enligt Do One Thing). Den kombinerar både logiken för att beräkna moms och för att skapa ett resultatobjekt. Detta har lett till att vissa funktioner blivit längre än nödvändigt och mindre fokuserade. För att förbättra detta, kommer jag att bryta ner funktioner i ännu mindre delar, vilket inte bara följer principerna i Clean Code, utan också gör koden mer testbar och återanvändbar.

Hantering av Fel och **Command Query Separation**

En annan viktig aspekt är felhantering. I mina nuvarande metoder som updateItemDetails(), kastas ett undantag om ett objekt inte hittas. Detta är bra , men jag inser att jag kan förbättra hur jag hanterar fel genom att separera logik från felsökning, som föreslås i Command Query Separation-principen. Istället för att blanda affärslogik med felhantering i en och samma metod, skulle jag kunna bryta ut felhantering i separata metoder för att hålla varje metod ren och fokuserad.

**One Level of Abstraction per Function**
Jag har försökt följa regeln om **One Level of Abstraction per Function**, men jag inser att det finns utrymme för förbättringar, särskilt i metoder som update(). Att hålla metoder på samma abstraktionsnivå gör koden mycket lättare att förstå, och genom att bryta ner metoder som hanterar olika detaljerade logiknivåer kan jag förbättra koden ytterligare. Att dela upp koden i mindre, specifika metoder skulle inte bara minska komplexiteten utan även följa principerna om att minimera den kognitiva lasten på utvecklaren som läser koden.