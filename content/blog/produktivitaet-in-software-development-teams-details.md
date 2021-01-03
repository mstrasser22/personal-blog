---
title: "Ein kritischer Blick auf die Produktivität (2/2)"
date: 2021-01-03T18:54:21+02:00
draft: false

# post thumb
image: "images/blog/produktivity.jpg"

# meta description
description: "Ein Blick auf die Produktivität in Software Development Teams (2/2)"

# taxonomies
categories: 
  - "Software Development"
tags:
  - "Software Development"
  - "IT-Management"

# post type
type: "featured"
---

Im letzten Artikel [ARTIKEL VERLINKEN!] habe ich bereits einen Überblick darüber gegeben, was ich unter *Produktivität* in der Softwareentwicklung verstehe und welche Bereiche meiner Erfahrung nach Einfluss darauf haben können. Hier gebe ich meine Erkenntnisse und Erfahrungen etwas detaillierter wieder.

### 1. Agiles Vorgehen
Agile Methoden zu verwenden, um effizient Software zu entwickeln, ist mittlerweile in unserer Branche sehr verbreitet. Sich für diese Vorgehensweise zu entscheiden, halte ich auch für sehr schlau. Nach über 10 Jahren Scrum bin ich nach wie vor ein großer Fan davon!
Was ich aber ebenso beobachte: sich "agil" auf die Fahnen zu heften, heißt nicht notwendigerweise agile Methoden korrekt umzusetzen. Mir sind schon so einige Variationen von "Scrum" untergekommen: 
"Wir machen jetzt Scrum, wir stellen uns jeden Morgen zusammen und reden miteinander!", "Scrum Master? Brauchen wir nicht!", "Die Retrospekitve ist bei uns nicht wichtig, die lassen wir aus.", "Bei uns ist der Product Owner auch der Scrum Master.", "Bei uns gibt es mehr POs als EntwicklerInnen.". 
Sich bei der Umsetzung von agilen Vorgehensmodellen nicht selbst anzulügen, ist meines Erachtens nach ein wichtige Faktor, um in den versprochenen Genuss der effizienten und kundenorientierten Softwareentwicklung zu kommen.

Auch wenn die Umstellung auf agile Softwareentwicklung einmal geglückt ist und man vorbildhaft darin ist, heißt das nicht, dass sich nicht auch mal blinde Flecken einschleichen. 
Nach über 10 Jahre mit Scrum stelle ich gerade wieder fest, wie wichtig es ist, die angewanten Methoden und Prozesse regelmäßig zu betrachten, radikal ehrlich zu sein um festzustellen, ob wir uns etwas schönreden, was eigentlich schon längst verbessert gehört. Ein Blick von Außen durch Externe oder neue MitarbeterInnen tut hier auch sehr gut. 
Verschläft man das allerdings, kann so manches Auswirkungen auf die *Produktivität* haben. 

#### Abweichungen reflektieren
Abweichungen vom Bilderbuch-Scrum gehörten begründet und auch in regelmäßigen Abständen reflekitert, ob diese tatsächlich aufgrund der Projektsituation noch notwendig sind.
Bsp.: ein Projekt erfordert mehr als einen PO. 
Das ist OK und lebbar, wenn begründbar. Läuft das Ganze aber aus dem Ruder und man hat mehr POs als EntwicklerInnen, entstehen möglicherweise Engpässe, unklare Verantwortlichkeiten, unklare Prioritäten, unterschiedliche Zielsetzungen,... was aber wie in Teil 1!!!!!!!!!LINK!! beschrieben Grundvoraussetzung ist, um produktiv arbeiten zu können. 

#### Größe des Scrum-Teams
Auch ein Scrum-Team verändert sich mit der Zeit. Irgendwann kann ein Team eine Größe erreichen, wo zu viele Kommunikationslinien entstehen und die Zusammenarbeit inneffizient wird. Was hier eine sinnvolle Größe ist, da sind mir schon verschiedene Angaben untergekommen. Ein Scrum-Team hat 7 (+/- 2) MitarbeiterInnen, maximal 12 Teammitglieder, etc. Hier gilt das Team, die Mitglieder und die Projektstruktur aufmerksam zu beobachten und wenn nötig, neu zu strukturieren.

#### Meetings
Die vorgegebenen Meetings des Prozess sollten stattfinden aber auch sinnvoll und effizient gestaltet werden. 
- Saubere und effiziente Planungs-Meetings (z.B. Vorbereitung von Backlogpunkten, Feinplanungen in kleineren Runden bei großen Scrum-Teams)
- Retrospektiven auch tatsächlich nutzen, um zu lernen und Verbesserungspotenziale zu identifizieren. 
- Auf die Länge von Daily Scrums achten, aber auch auf die Einhaltung dieser.

#### Klare Projektziele, klare Anforderungen und klare Prioritäten
Da bin ich bei einem der größten Produktivitätshemmer angekommen:
Fehlende Klarheit in Bezug auf Ziele, Anforderungen und Prioritäten.

Ist das Ziel nicht klar, passiert irgendwas, aber nicht das, was am Ende des Tages benötigt wird.
Um produktiv Kundennutzen zu generieren, muss klar sein, wohin das Schiff fährt, also welches **Ziel** erwartet wird.
Die konkreten Anforderungen definieren **WAS** dazu notwendig ist und die Prioritäten, machen es möglich, diese effizient in der benötigten Reihenfolge abzuarbeiten. Somit muss zu jedem Zeitpunkt klar sein **was als nächstes zu tun ist**!

Das heißt nicht, dass das gesamte Projekt bis ins Detail durchgeplant sein soll, sonste wäre es keine agile Vorgehensweise sondern ein Wasserfallmodell. Zu schwammige Anforderungen über einen längeren Zeitraum sind aber gefährlich für den Projektfortschritt. Das heißt wir müssen nicht den gesamten Weg bis zum Ziel kennen, aber die **nächsten Schritten müssen klar sein**.

Wenn ich das so schreibe, klingt das in der Theorie auch recht schön
Nun habe ich die Erfahrung gemacht, dass das bei neuen Projekten, neuen Methoden und Technologien gar nicht so einfach ist.
Das erste mal eine Microservice-Architektur für eine Produktlandschaft zu entwerfen, die ersten Microservices mit Cloud-Komponenten betreiben, die erste Deployment-Pipeline einrichten, etc.
Da sind die nächsten Schritte nunmal nicht immer soooo klar. In solchen Phasen entstehen nunmal sehr schwammige und grobe Anforderungen in einem Sprint, die eher Fragestellungen gleichen wie "Herausfinden, wie man eine Deployment-Pipeline einrichtet" oder "Microservices schneiden". 
Sowas lässt sich anfangs nicht vermeiden. Zu so einem Zeitpunkt ist es notwendig, Antworten zu bekommen um herauszufinden, was überhaupt die nächsten Schritte sein müssen, um später den Kundennutzen befriedigen zu können. 
Hierbei ist aber darauf Acht zu geben, dass diese Phase nur **vorübergehend** besteht und nicht zum Normalzustand wird! Je mehr Fragen bewantwortet werden, desto konkreter sollten Ziele und Anforderungen formuliert werden.
Was hilft aus dieser Phase herauszukommen, ist sich selbst, POs und EntwicklerInnen bei der Definition von Backlog- und Sprint-Backlogeinträgen immer wieder zu zwingen, so klar wie möglich zu formulieren, warum das benötigt wird und was am Ende rauskommen soll (sei das Ziel auch noch so klein). Das bedarf etwas Übung und funktioniert auch nicht immer gleich. Es ist aber wichtig, daran zu arbeiten. 


### 2. Verschwendung und Engpässe lokalisieren und bereinigen
Was Produktivität, egal in welcher Branche, hemmt, sind Verschwendung und Engpässe.
Unter Verschwendung fällt alles, was keinen Kundennutzen genieriert und eigentlich vermeidbar wäre, z.B. unnötige Bürokratie, unnötige Besprechungen, inneffiziente Planung.
Engpässe in Softwareentwicklungsteams können ganz unterschiedlicher Natur sein, sie zeichnen sich aber dadurch aus, dass es zu einem Flaschenhals kommt, wo Wartezeiten entstehen.
- Fehlende Infrastruktur (Hardware, Software)
- Jemand wartet au jemand anderen und kann nicht weitermachen - möglicherweise wegen falscher Planung?
- Zu wenig Architekten in Design Phasen, zu wenig EntwicklerInnen in Phasen der Feature-Entwicklung, zu wenige Requirements Engineere, die Anforderungen aufbereiten.

WAS NOCH? AUS DEVOPS BUCH
DEVOPS BUCH sowie LInk drauf?

Um Verschwendung und Engpässe aufzudecken, ist Beobachtung gefragt. Ich mache das gerne bei mir selber, dass ich an manchen Tagen bewusst darauf achte, was ich eigentlich so mache und was davon vermeidbar und keinen Nutzen hat (weder für mich persönlich, noch für das Projekt, die Familie, etc.). Wenn das jeder im Team macht, lassen sich sicher einige Tätigkeiten aufdecken, die ersetzt oder optimiert (automatisiert) werden können. Das gleiche gilte für Flaschenhälse - auch hier ist ein Zeitraum der Beobachtung notwendig, um diese zu erkennen, außer es ist sehr sehr offensichtlich.


#### Kommunikation und Besprechungen
Ich bin ein riesiger Fan von Kommunikation, darum möchte ich dieses Thema hier mit Vorsicht ansprechen.
Meiner Beobachtung nach ist nämlich Kommunikation nach wie vor der Bereich, der (egal ob privat oder beruflich) sehr vernachlässigt wird und sehr häufig zu Missverständnissen führt. 
Was ich aber hier trotzdem erwähnen möchte, obowhl ich eher zu mehr Komminikation ermutige, dass auch hier acht zu geben ist, die Kommunikation effizient zu gestalten.
Problematisch wird es nämlich dann, wenn es zu viele Kommunikationslinien gibt, weil die Teams zu groß sind, keine klaren Verantwortlichkeiten vorhanden sind und man quasi mit jedem/jeder reden muss, um zu einer Entscheidung zu gelangen. 
Das birgt die Gefahr, dass in Besprechungen viel zu viele Menschen sitzen, zu viel diskutiert wird, aber es letztendlich keine Entscheidungen getroffen werden.
Rechnet man mal hoch, was solche Besprechungen kosten, ist das sehr erschreckend.

In solchen Situationen kann es helfen (wie es auch der Microservice-Ansatz vorsieht) kleinere, effiziente Teams zu bilden, die jeweils voneinander getrennte Themen bearbeiten und verantworten. Außerdem kann auch betrachtet werden, warum so viele Menschen involviert sind. Tragen alle auch zu einem Ergebnis bei? Gibt es manche, die einfach nur Informationen benötigen, die auch auf andere Art und Weise transportiert werden könnten? Ist es reine Nächstenliebe á la "ich will doch niemanden ausschließen"? Braucht es andere Formen, um möglichst viele Menschen (gerade in Phasen des Wandels) partizipieren zu lassen ohne Inneffizient zu werden?
Kommunikation und Besprechungen sind auch etwas Dynamisches, das heißt die Situation im Projekt gehört immer wieder neu betrachtet und wenn notwendig der Kurs korrigiert.

#### Fokus und "Flow"
Auch ein Thema, von dem ich ein Lied singen kann ist es, den Fokus zu halten. Sich zu einem Zeitpunkt auf genau eine Sache zu konzentrieren, scheint in unserer schnelllebigen Multi-Tasking-Welt eher rares Gut zu sein. Obowhl es immer hieß "Frauen sind doch multitasking-fähig" hatt ich in meiner Jugend eine andere Erkenntniss. Kurze Zeit dachte ich, statt in der IT zu bleiben werde ich Fluglotsin (nicht zu verwechseln mit Flugbegleiterin ;-)). Dazu muss man bei der Austrocontrol einen mehrstufigen Aufnahmetest bestehen, um die Ausbildung machen zu können. Um alle Flugzeuge gleichzeitig im Überblick haben zu können, wird mittels einer Simulation getestet, ob man dazu in der Lage ist.
Leider schaffte ich gleich den ersten Aufnahmetest nicht, weil mein multitasking nicht ausreichend war. Das war ein Schlag ins Gesicht: eine Frau, die nicht multitasking-fähig ist. Da bin ich doch quasi nicht vermittelbar, oder?
Zumindest gab es in der Softwareentwicklung doch noch Platz für mich. Was ich nämlich daran liebe ist, dass man sich bei der Lösung eines Problems oder beim Finden eines Fehlers so richtig tief eintauchen und rundum alles ausblenden kann. Fokus per excellence!
Seit ich Kinder habe, sind diese Momente rar. Seit ich sehr viel Software-Projektmanagement mache, ebenso. 
Was ich aber weiß ist, dass es für eine SoftwareentwicklerIn absolut notwendig ist, Zeiten zu haben, um sich voll konzentriert der Lösung einer Aufgabenstellung zu widmen. Ich spreche auch gerne dafür zu sorgen, in den "Flow" zu kommen. Ist doch ein super Wort und passt für Softwareentwicklung genauso wie für Yoga oder Kinder beim Spielen.
Wird der Entwicklungsprozess immer wieder unterbrochen (wenn auch nur kurz), ist es schwer, in diesen Zustand des "Flow" zu kommen. Bei Kindern heißt es immer, wenn die beim Spielen im "Flow" sind, darf man sie nicht unterbrechen. Nicht mal mit ihnen reden. Denn wenn sie andauernd aus diesem Zustand gerissen werden, lernen sie nie, sich für längere Zeit zu konzentrieren.
Ich kenne das aus der Softwareentwicklung auch. Ich brauche ein bisschen, bis ich konzentriert in den "Flow"-Zustand komme, aber dann läuft's von selbst und ich komme zu super kreativen Lösungen.
Umgekehrt weiß ich, wie produktivitätssenkend es ist, immer wieder unterbrochen zu werden. Ein Task wird einfach nicht fertig, nach jeder  Unterbrechung muss man sich wieder reindenken, kaum ist man dabei richtig loszulegen, nächste Unterbrechung. Wieder von vorne... Wenn es vielen MitarbeiterInnen so geht, kann man sich vorstellen, was das für die Produktivität heißt!

Das heißt, um Produktivität zu steigern, hilft es für Fokus und "Flow" zu sorgen.

Hier in paar Anregungen:
- Besprechungen unterbrechen den Flow. Besprechungsfreie Zeiten einplanen, Besprechungen an bestimmten Tage/Zeiten legen.
- Flow-Zeiten genauso einplanen, wie Besprechungen. Wenn ich weiß ich hab ein kniffliges Thema, blocke ich mir gerne ganze (Halb-)Tage aus, um mich nur diesem Thema zu widmen. 
- Dafür sorgen, dass man nicht unterbrochen wird. Ich habe festgestellt (Danke Corona!), dass sich Homeoffice super dafür anbietet, vor allem wenn man ansonsten im Großraumbüro sitzt. 
  Ist man im Büro, kann man den KollegInnen anders mitteilen, dass man gerade nicht gestört werden möchte (durch explizite Komunikation, durch ein Zeichen oder Symbol auf dem Tisch, etc.)
- Limit your WIP! Es ist ein Mantra, dass für Projektmanagement sowie für das persönliche Arbeitsmanagement gibt. Zu viele Baustellen machen einen langsamer, als schneller. Je weniger Work-in-progress gleichzeitig vorhanden ist, um so fokussierter kann man sich genau der einen Sache widmen, die gerade am Wichtigsten ist.
- Lerne dich selbst kennen! Jede(r) tickt und arbeitet anders. Wenn man sich selber gut beobachtet und kennenlernt, erkennt man auch, wie die Voraussetzungen sein müssen, um konzentriert arbeiten und daher gute Leistung bringen zu können. Ich für mich weiß, das sich ausgeschlafen sein muss und ich spät abends nicht mehr viel auf die Reihe bekomme. Darum brauche ich auch so lange, um meine Blog-Artikel zu schreiben. Meine berufliche und familäre Situation lässt nur den Abend für mein Hobby zu, und naja,... da geht halt nicht mehr so viel! ;-) Habe ich aber die Möglichkeit in den frühen Morgenstunden zu arbeiten, geht da sooo viel! Ich kenne aber auch Menschen, die sind richtige Nachteulen und arbeiten bis spät in die Nacht produktiv dahin.




#### Werkzeuge und Prozesse
Microservices, DevOps, Cloud



Die Kurve kratzen  zwischen den Zielsetzungen und Werten, für die wir stehen (Code ist qualitätsgesichert - heißt Quergecheckt von wem anderen, Unit Test, Integrationsttest, ausrecihend abgestimmt - ist das was der Kunde will, und steht zur Verfügung (DevOps)) Diese Zeitspanne so weit wie möglich optimieren, das geht am besten mit klaren und kelinen Paketen.
get things done

Balance zwischen Qualität, Produktivität und Mitarbeiterzufriedenheit

Ausbildung
je sicherer jeder Mitarbeiter in dem was er tut ist, desto besser und schneller kann Arbeit verrichten
Problem wenn ansteht, nicht weiterweiß und wiederum wartet bis jemand anderes Hilfe braucht.
Hemmschwelle mancher abzutauchen, Schue nehmen, sonst verfängt man sich in einem Rad

Verantwortung übergen! 



Tools und Prozesse
Cloud, Devops
Achtung: anfangs mal extrem langsam. Cloud neu (Lernkurve), DevOps neue (Menschliche Phase dauert lange, Aufsetzen des DevOps-Prozesses/Build Pipelines CD)
unnötige Freigaben, Abstimmungen,..

Covid:
Fokus/homeoffice - besser
Abstimmungen, dort wo Kommunikation notwendig - langsamer, komplexer, slow down. Abstimmungen teilweise komplizierter wenn verteilt und nur virtuell. vor allem auch mit verschiedneen Kunden. kleine Meetings direkt ok, größere viele Leute da geht einiges verloren. auch das zwischendurch mit Kunden beim Kaffee oder den KOllegen beim Kaffee getroffen und zufällig über ein Problem gesprochen fällt weg.
