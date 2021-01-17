---
title: "Ein kritischer Blick auf Produktivität (2/2)"
date: 2021-01-03T18:54:21+02:00
draft: false

# post thumb
image: "images/blog/productivity_2.jpg"

# meta description
description: "Einflussfaktoren auf die Produktivität in Software Development Teams - Details (2/2)"

# taxonomies
categories: 
  - "Software Development"
tags:
  - "Software Development"
  - "IT-Management"
  - "Produktivität"

# post type
type: "featured"
---

Im letzten Artikel [ARTIKEL VERLINKEN!] habe ich bereits einen Überblick darüber gegeben, was ich unter *Produktivität* in der Softwareentwicklung verstehe und welche Bereiche meiner Erfahrung nach Einfluss darauf haben können. Hier gebe ich meine Erkenntnisse und Erfahrungen etwas detaillierter wieder.

### 1. Agiles Vorgehen
Agile Methoden zu verwenden, um effizient Software zu entwickeln, ist mittlerweile in unserer Branche sehr verbreitet. Sich für diese Vorgehensweise zu entscheiden, halte ich auch für sehr schlau. Nach über 10 Jahren Scrum bin ich nach wie vor ein großer Fan davon!
Was ich aber ebenso beobachte: sich "agil" auf die Fahnen zu heften, heißt nicht notwendigerweise agile Methoden korrekt umzusetzen. Mir sind schon so einige Variationen von "Scrum" untergekommen: 
- "Wir machen jetzt Scrum, wir stellen uns jeden Morgen zusammen und reden miteinander!"
- "Scrum Master? Brauchen wir nicht!"
- "Die Retrospekitve ist bei uns nicht wichtig, die lassen wir aus."
- "Bei uns ist der Product Owner auch der Scrum Master."
- "Bei uns gibt es mehr POs als EntwicklerInnen.". 

Sich bei der Umsetzung von agilen Vorgehensmodellen nicht selbst anzulügen, ist meines Erachtens nach ein wichtige Faktor, um in den versprochenen Genuss der effizienten und kundenorientierten Softwareentwicklung zu kommen.

Auch wenn die Umstellung auf agile Softwareentwicklung einmal geglückt ist und man vorbildhaft darin ist, heißt das nicht, dass sich nicht auch mal blinde Flecken einschleichen. 
Nach über 10 Jahre mit Scrum stelle ich gerade wieder fest, wie wichtig es ist, die angewendeten Methoden und Prozesse regelmäßig zu betrachten, radikal ehrlich zu sein um festzustellen, ob wir uns etwas schönreden, was eigentlich schon längst verbessert gehört. Ein Blick von Außen durch Externe oder neue MitarbeterInnen tut hier auch sehr gut. 
Verschläft man das allerdings, kann so manches Auswirkungen auf die *Produktivität* haben. 

#### Abweichungen reflektieren
Abweichungen vom Bilderbuch-Scrum gehören begründet und auch in regelmäßigen Abständen refelektiert, ob diese tatsächlich aufgrund der Projektsituation noch notwendig sind.
Bsp.: ein Projekt erfordert mehr als einen PO. 
Das ist OK und lebbar, wenn begründbar und strukturell sauber definiert. Läuft das Ganze aber mit der Zeit aus dem Ruder und man hat irgendwann mehr POs als EntwicklerInnen, entstehen möglicherweise Engpässe, unklare Verantwortlichkeiten, unklare Prioritäten, unterschiedliche Zielsetzungen,... was aber wie in Teil 1!!!!!!!!!LINK!! beschrieben Grundvoraussetzung ist, um produktiv arbeiten zu können. 

#### Größe des Scrum-Teams
Auch ein Scrum-Team verändert sich mit der Zeit. Irgendwann kann ein Team eine Größe erreichen, in dem zu viele Kommunikationslinien entstehen und die Zusammenarbeit inneffizient wird. Was hier eine sinnvolle Größe ist, da sind mir schon verschiedene Angaben untergekommen. "Ein Scrum-Team hat 7 (+/- 2) MitarbeiterInnen", "maximal 12 Teammitglieder", etc. Hier gilt es das Team, die Mitglieder und die Projektstruktur aufmerksam zu beobachten und wenn nötig, Anpassungen der Struktur vorzunehmen.

#### Meetings
Die vorgegebenen Meetings des Prozess sollten stattfinden aber auch sinnvoll und effizient gestaltet werden. 
- Saubere und effiziente Planungs-Meetings (z.B. Vorbereitung von Backlogpunkten, Feinplanungen in kleineren Runden bei großen Scrum-Teams).
- Retrospektiven auch tatsächlich nutzen, um zu lernen und Verbesserungspotenziale zu identifizieren. 
- Auf die Länge von Daily Scrums achten, aber auch auf die Einhaltung dieser.

#### Klare Projektziele, klare Anforderungen und klare Prioritäten
Da bin ich bei einem der größten Produktivitätshemmer angekommen:
Fehlende Klarheit in Bezug auf Ziele, Anforderungen und Prioritäten.

Ist das Ziel nicht klar, passiert irgendwas, aber nicht das, was am Ende des Tages benötigt wird.
Um produktiv Kundennutzen zu generieren, muss *für alle* klar sein, wohin das Schiff fährt, also welches **Ziel** angesteuert wird.
Die konkreten Anforderungen definieren, **was** dazu notwendig ist und die Prioritäten machen es möglich, diese effizient in der benötigten Reihenfolge abzuarbeiten. Somit muss zu jedem Zeitpunkt klar sein **was als Nächstes zu tun ist, um dem Ziel näher zu kommen**!

Das heißt nicht, dass das gesamte Projekt bis ins Detail durchgeplant sein soll, sonste wäre es keine agile Vorgehensweise sondern ein Wasserfallmodell. Wir müssen nicht den gesamten Weg bis zum Ziel kennen, aber die **nächsten Schritten müssen bekannt** und in Form klarer Anforderungen und Prioritäten definiert sein.

Wenn ich das so schreibe, klingt das in der Theorie auch recht schön.
Nun habe ich die Erfahrung gemacht, dass das bei neuen Projekten, neuen Methoden und Technologien gar nicht so einfach ist immer ganz "klar" zu definieren.
Das erste mal eine Microservice-Architektur für eine Produktlandschaft zu entwerfen, die ersten Microservices mit Cloud-Komponenten betreiben, die erste Deployment-Pipeline einrichten, etc.
Da sind die nächsten Schritte nunmal nicht immer soooo klar. In solchen Phasen entstehen nunmal sehr schwammige und grobe Anforderungen in einem Sprint, die eher Fragestellungen gleichen wie "Herausfinden, wie man eine Deployment-Pipeline einrichtet" oder "Microservices schneiden". 
Sowas lässt sich anfangs nicht vermeiden. Zu so einem Zeitpunkt ist es notwendig, Antworten zu bekommen um herauszufinden, was überhaupt die nächsten Schritte sein müssen, um später den Kundennutzen befriedigen zu können. 
Hierbei ist aber darauf Acht zu geben, dass diese Phase nur **vorübergehend** besteht und nicht zum Normalzustand wird! Je mehr Fragen bewantwortet werden, desto konkreter sollten Ziele und Anforderungen formuliert werden.
Was hilft aus dieser Phase herauszukommen, ist sich selbst, POs und EntwicklerInnen bei der Definition von Backlog- und Sprint-Backlogeinträgen immer wieder zu zwingen, so klar wie möglich zu formulieren, warum das benötigt wird und was am Ende rauskommen soll (sei das Ziel auch noch so klein). Das bedarf etwas Übung und funktioniert auch nicht immer auf Anhieb. Es ist aber wichtig, daran zu arbeiten. 


### 2. Verschwendung und Engpässe lokalisieren und bereinigen
.....

Um Verschwendung und Engpässe aufzudecken, ist Beobachtung gefragt. Ich mache das gerne bei mir selber, dass ich an manchen Tagen bewusst darauf achte, was ich eigentlich so mache und was davon vermeidbar und keinen Nutzen hat (weder für mich persönlich, noch für das Projekt, die Familie, etc.). Wenn das jeder im Team macht, lassen sich sicher einige Tätigkeiten aufdecken, die ersetzt oder optimiert (automatisiert) werden können. Das gleiche gilte für Flaschenhälse - auch hier ist ein Zeitraum der Beobachtung notwendig, um diese zu erkennen, außer es ist sehr sehr offensichtlich.


### 3. Kommunikation und Besprechungen
Ich bin ein riesiger Fan von Kommunikation, darum möchte ich dieses Thema hier mit Vorsicht ansprechen.
Meiner Beobachtung nach ist nämlich Kommunikation nach wie vor der Bereich, der (egal ob privat oder beruflich) sehr vernachlässigt wird und sehr häufig zu Missverständnissen führt. 
Was ich aber hier trotzdem erwähnen möchte ist, dass es einen Unterschied macht, wie die Kommunikation gestaltet wird.

Problematisch wird es nämlich dann, wenn es zu viele Kommunikationslinien gibt, weil die Teams zu groß sind, keine klaren Verantwortlichkeiten vorhanden sind und man quasi mit jedem/jeder reden muss, um zu einer Entscheidung zu gelangen. 
Das birgt die Gefahr, dass in Besprechungen viel zu viele Menschen sitzen, zu viel diskutiert wird, aber letztendlich keine Entscheidungen getroffen werden.
Rechnet man mal hoch, was solche Besprechungen kosten, ist das sehr erschreckend.

In solchen Situationen kann es helfen (wie es auch der Microservice-Ansatz vorsieht) kleinere, effiziente Teams zu bilden, die jeweils voneinander getrennte Themen bearbeiten und verantworten. Außerdem kann auch betrachtet werden, warum so viele Menschen involviert sind. Tragen alle zu einem Ergebnis bei? Gibt es manche, die einfach nur Informationen benötigen, die auch auf andere Art und Weise transportiert werden könnten? Ist es reine Nächstenliebe á la "ich will doch niemanden ausschließen"? Braucht es andere Formen, um möglichst viele Menschen (gerade in Phasen des Wandels) partizipieren zu lassen ohne Inneffizient zu werden?
Fehlen möglicherweise einfach nur klaren Verantwortlichkeiten, um die Kommunikation direkter und effizienter zu gestalten?

Kommunikation und Abstimmungsformen sind etwas sehr Dynamisches. Die Situation im Projekt/Team gehört immer wieder neu betrachtet und wenn notwendig, der Kurs korrigiert.

### 4. Fokus und "Flow"
Ein Thema, von dem ich ein Lied singen kann, ist es den Fokus zu halten. Sich zu einem Zeitpunkt auf genau eine Sache zu konzentrieren, scheint in unserer schnelllebigen Multi-Tasking-Welt eher rares Gut zu sein. Obowhl es immer hieß "Frauen sind doch multitasking-fähig" hatte ich in meiner Jugend eine andere Erkenntniss. Kurze Zeit dachte ich, statt in der IT zu bleiben werde ich Fluglotsin (nicht zu verwechseln mit Flugbegleiterin ;-)). Dazu muss man bei der Austro Control einen mehrstufigen Aufnahmetest bestehen, um die Ausbildung machen zu können. Um alle Flugzeuge gleichzeitig im Überblick haben zu können, wird mittels einer Simulation getestet, ob man dazu in der Lage ist.
Leider schaffte ich gleich den ersten Aufnahmetest nicht, weil ich nicht ausreichend multitaskingfähig war. Das war ein Schlag ins Gesicht: eine Frau, die nicht multitasking-fähig ist. Da bin ich doch quasi nicht vermittelbar, oder?

Zumindest gab es in der Softwareentwicklung doch noch Platz für mich. Was ich nämlich daran liebe ist, dass man sich bei der Lösung eines Problems oder beim Finden eines Fehlers so richtig tief eintauchen und rundum alles ausblenden kann. Fokus per excellence!

Seit ich Kinder habe, sind diese Momente rar. Seit ich sehr viel Software-Projektmanagement mache, ebenso. 
Was ich aber weiß ist, dass es für eine(n) SoftwareentwicklerIn absolut notwendig ist, Zeiten zu haben, um sich voll konzentriert der Lösung einer Aufgabenstellung zu widmen. Ich nenne das auch gerne dafür zu sorgen, in den "Flow" zu kommen. Das Wort gefällt mir und passt für die Softwareentwicklung genauso wie für Yoga oder Kinder beim Spielen.
Wird der Softwareentwicklungsalltag immer wieder unterbrochen (wenn auch nur kurz), ist es schwer, in den Zustand des "Flows" zu kommen. Bei Kindern heißt es immer, wenn sie beim Spielen im "Flow" sind, darf man sie nicht unterbrechen. Nicht mal mit ihnen reden. Denn wenn sie andauernd aus diesem Zustand gerissen werden, lernen sie nie, sich für längere Zeit zu konzentrieren.
Ich kenne das aus der Softwareentwicklung auch. Ich brauche ein bisschen, bis ich konzentriert in den "Flow"-Zustand komme, aber dann läuft's von selbst und ich komme zu super kreativen Lösungen.
Umgekehrt weiß ich, wie produktivitätssenkend es ist, immer wieder unterbrochen zu werden. Ein Task wird einfach nicht fertig, nach jeder  Unterbrechung muss man sich wieder reindenken, kaum ist man dabei richtig loszulegen, nächste Unterbrechung. Wieder von vorne... Wenn es vielen MitarbeiterInnen so geht, kann man sich vorstellen, was das für die Produktivität heißt!

Zusammenfassend heißt das: **um Produktivität zu steigern, hilft es für Fokus und "Flow" zu sorgen.**

Hier in paar Anregungen:
- Besprechungen unterbrechen den Flow. 
  Abhilfe: Besprechungsfreie Zeiten einplanen, Besprechungen an bestimmte Tage bzw. Tageszeiten legen.
- Flow-Zeiten genauso einplanen, wie Besprechungen. 
  Wenn ich weiß, ich hab ein kniffliges Thema, blocke ich mir gerne ganze (Halb-)Tage aus, um mich nur diesem Thema zu widmen. 
- Dafür sorgen, dass man nicht unterbrochen wird. 
  Ich habe festgestellt (Danke Corona!), dass sich Homeoffice super dafür anbietet, vor allem wenn man ansonsten im Großraumbüro sitzt. 
  Ist man im Büro, kann man den KollegInnen anders mitteilen, dass man gerade nicht gestört werden möchte (durch explizite Komunikation, durch ein Zeichen oder Symbol auf dem Tisch, ...)
- Limit your Work-in-Progress! 
  Es ist ein Mantra, dass genauso im Projektmanagement also auch im persönlichen Arbeitsmanagement gilt. Zu viele Baustellen machen einen langsamer, als schneller. Je weniger Baustellen gleichzeitig vorhanden sind, um so fokussierter kann man sich genau der einen Sache widmen, die gerade am Wichtigsten ist.
- Lerne dich selbst kennen! 
  Jede(r) tickt und arbeitet anders. Wenn man sich selber gut beobachtet und kennenlernt, erkennt man auch, wie die Voraussetzungen sein müssen, um konzentriert arbeiten und daher gute Leistung bringen zu können. 
  Ich für mich weiß, das ich ausgeschlafen sein muss und ich spät abends nicht mehr viel auf die Reihe bekomme. Darum brauche ich auch so lange, um meine Blog-Artikel zu schreiben. Meine berufliche und familäre Situation lässt nur den Abend für mein Hobby zu, und naja,... da geht halt nicht mehr so viel! ;-) Habe ich aber die Möglichkeit in den frühen Morgenstunden zu arbeiten, geht da sooo viel! Ich kenne aber auch Menschen, die sind richtige Nachteulen und fangen erst wenn's dunkel wird an richtig produktiv zu werden.
  Probiere verschiedenes aus, finde heraus, was für dich passt und kommunziere es deinen TeamkollegInnen. So kann aus vielen einzelnen Produktivitätsoptimierungen gesamtheitlich mehr erreicht werden!



#### Werkzeuge und Prozesse
Neue Werkzeuge und Prozesse einzuführen, um Produktivität zu steigern, kann langfristig sehr viel Erfolg bringen, aber auch ein Griff ins Klo sein. 
Der Satz "a fool with a tool is still a fool" kommt nicht von ungefähr.
Wie oft werden Softwaresysteme oder Prozesse vom Management eingeführt, weil sie in irgendeiner anderen Firma für Erfolg sorgen. In der eigenen Firma funktioniert's aber dann doch nicht so gut. Die Gründe dafür können sehr vielfältig sein und würde an dieser Stelle den Rahmen sprengen.

Was ich aber wichtig finde ist, genau zu analysieren, was die eigene Organisation braucht um sich weiterentwickeln und aus dem vollen Pozenzial schöpfen zu können.
Die aktuellen Projekte, mit denen ich zu tun habe, setzen hier sehr stark auf den Einsatz von Microservice-Architekturen, DevSecOps und der Cloud als effiziente und skalierbare Entwicklungs- und Betriebsumgebung.
Würde ich nun jedem pauschal dazu raten, den gleichen Weg anzutreten? Definitiv nicht! Meiner Ansicht nach gehört für jedes Projekt und die involvierten Menschen individuell entschieden, wie mit Unterstützung von Werkzeugen und Prozessen möglichst viel des vorhandenen Potenzials und damit Produktivität entfaltet werden kann.

Möglicherweise kommt man dann trotzdem zu einem ähnlichen Ergebnis. Gerade DevSecOps und die Cloud versprechen mehr Effizienz bei der Softwareentwicklung und können von den meisten Entwicklungsteams nicht mehr ignoriert werden. Als ProjektmanagerIn sollte man rechtzeitig Zeit einplanen, um sich mit diesen Themen zu befassen und zu überlegen, wie man von diesen Entwicklungen profitieren kann. Immerhin bedingt es einer Lernkurve, die Zeit benötigt. 
Eine gute Ausbildung der MitarbeiterInnen kann hier helfen, Berührungsängste rechtzeitig zu beseitigen und schnell in den Genuss Vorteile zu kommen.


### Fazit
*Produktivität* kann mit vielen kleinen Veränderungen erhöht werden. Grundlegend ist dabei nicht zu versuchen, möglichst viele Dinge gleichzeitig zu tun, sondern die wiklich wichtigen Dinge fokusiert zu erledigen. Daher sollten jene Bereiche analysiert werden, die Einfluss auf die Produktivität haben, sei es den agilen Prozess zu verbessern, Kommunikation und Besprechungen zu analysieren oder sinnvoll eingesetzte Werkzeuge und Prozesse zu etablieren. Vor allem aber sollte sich jeder überlegen, wie er/sie fokusiert und ungestört arbeiten kann, um die Dinge zu erledigen, die wirklich zählen. Bereit sein, spielereisch Neues auszuprobieren, kann hier helfen!
 
