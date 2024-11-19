# Chapter 4

Jag har försökt undvika långa kommentarer och kommentarer som beskriver vad koden gör. I stället har jag fokuserat på att ge funktioner och klasser tydligare och mer beskrivande namn, i enlighet med principen `"Don’t use a comment when you can use a function or a variable"`.
Det är dock en utmaning att ändra en vana man har varit van vid.
Se [bild](../docs/images/comments.png)

# chapter 5

Kapitel 5 handlar om att skriva kod på ett sätt som är lätt att läsa och förstå. Formatering är en viktig del av detta, eftersom det påverkar både hur lätt koden går att läsa och hur lätt den kan underhållas.

Enligt principen om `Conceptual Affinity` ska relaterad kod samlas på samma ställe för att skapa ett naturligt flöde. I min kod försöker jag hålla logiskt relaterade delar nära varandra för att göra den lättare att läsa.
Se [bild](../docs/images/formatting.png)

# chapter 6

Kapitel 6 handlar om datahantering och kapsling, som jag försöker använda i `ProductManagement`. Genom att kapsla in produktdata och skapa metoder för att hantera den, som `findProductByName`, följer jag principen om att dölja information `information hiding`. Detta gör att detaljer om hur data hanteras inte syns för användaren av klassen, vilket gör koden säkrare och lättare att underhålla. 
Se [bild](../docs/images/informationHiding.png)

# chapter 7

Kapitel 7 handlar om felhantering och hur viktigt det är att skriva kod som hanterar fel på ett tydligt och effektivt sätt. En av de centrala principerna i kapitlet är att undvika att skicka `null` mellan metoder eller funktioner. Detta hjälper till att förhindra oväntade fel och gör koden mer förutsägbar och lättare att förstå. Jag har dock på flera ställen i min kod skickat `null` som argument, vilket jag kommer att ändra innan jag lämnar in den.
se [bild](../docs/images/null.png)

# chapter 8

Kapitel 8 handlar om gränser (Boundaries) och hur viktigt det är att hantera interaktioner mellan olika delar av en applikation på ett tydligt och konsekvent sätt. Ett centralt begrepp som tas upp är användning av tredjepartskod `Using Third-Party Code`. Att förstå detta är viktigt för att skapa modulär och underhållbar kod, där varje komponent eller modul ansvarar för sina egna funktioner och gränssnitt. Detta hjälper till att hålla applikationen flexibel och lätt att förändra utan att påverka andra delar av systemet.

Som `provider of API` har `ProductManagement` ansvaret för att definiera de metoder och funktioner som andra klasser som `ProductEditor` kommer att använda för att hantera produkter. `ProductManagement` är där all affärslogik och datamanipulering sker, såsom att lägga till, uppdatera och ta bort produkter, samt beräkna totalpriser. Dessa metoder gör uppgifter som andra klasser inte ska behöva bry sig om.
se [bild](../docs/images/boundaries.png)

# chapter 9
Kapitel 9 handlar om att skriva bra enhetstester som är tydliga och isolerade `Keeping Tests Clean`. Jag har försökt följa dessa principer när jag skrev tester för `ProductManagement`. Till exempel testar jag att lägga till en produkt:
se [bild](../docs/images/unittests.png)

# chapter 10
Kapitel 10 handlar om att klasser ska vara små och fokuserade, med endast ett ansvar `SRP`. Jag har försökt applicera detta i mina klasser genom att dela upp funktionaliteten i tydliga enheter. Till exempel hanterar klassen `ProductManagement` endast logiken för produkter, medan andra klasser som `ProductEditor` och `ProductListView` sköter specifika gränssnittsuppgifter.
se [bild](../docs/images/SRP.png)

# chapter 11
kapitel 10 handlar om hur olika delar i systemet kommunicerar, och hur viktigt det är att separera applikationens main-funktion `Separation of Main` från affärslogik och detaljer, Jag har försökt tillämpa detta i `ProductApp` klassen.
Se [bild](../docs/images/SRP.png)

