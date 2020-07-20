---
title: "Hey, machen wir doch DevOps!"
date: 2020-07-05T18:54:21+02:00
draft: false

# post thumb
image: "images/blog/devops.jpg"

# meta description
description: "article about devops"

# taxonomies
categories: 
  - "DevOps"
tags:
  - "DevOps"
  - "DevSecOps"

# post type
type: "featured"
---


Da sitzen wir nun – das Team rund um den Besprechungstisch und alle sind ganz begeistert, denn wir machen nun *DevOps*! 
Passt super zum neuen Projekt und alle anderen machen es doch auch schon, da will man nicht hinten anstehen. 
Außerdem hat die Erfahrung aus den Monaten zuvor gezeigt, dass wenn die Software stabil und sicher laufen soll, Entwicklung („DEVelopment“) und Betrieb („OPerationS“) enger zusammenrücken 
und sich gut absprechen müssen. Ein Blick in die Runde wirft jedoch Fragen auf… es sitzen nur SoftwareentwicklerInnen im Raum. 
Wo sind denn diese OPS, mit denen man enger zusammenrücken will? 
Eine noch viel wichtigere Frage: WIE macht man denn *DevOps* eigentlich?

## Einen Schritt zurück
Spulen wir ein wenig zurück. 
Warum wir in unserem Team *DevOps* leben wollen, hat letztendlich einen Grund und eine Historie. 


Ich persönlich habe mich in der Vergangenheit um den Betrieb von Software genau gar nicht gekümmert und hätte nicht im Leben daran gedacht, dass sich das für mich irgendwann ändern würde. 
Jahrelang habe ich an einer großen Desktop-Anwendung mitentwickelt. 
Zum Release-Zeitpunkt haben wir halbwegs automatisiert das Softwarepaket geschnürt, einen Installer gab’s auch noch im Paket dazu und das bekamen die Kundenfirmen, 
die gleichzeitig die Software für die EndkundInnen betrieben. Das war’s, nächster Sprint, nächste Funktionalität. 
Nur selten habe ich mir als Entwicklerin Gedanken dazu gemacht, wie es unserer Software im Betrieb wohl geht. 
Um das hat sich jemand anderes gekümmert und es lebte sich ganz gut - außer bei Betriebsproblemen…
  
Ist die Ursache des Problems nicht ganz klar, wird's unangenehm. 
Haben die EntwicklerInnen bei der Umsetzung einen Fehler eingebaut? Wurde die Betriebsumgebung von den AdministratorInnen falsch konfiguriert? 
Passen die Softwareversionen der Betriebsumgebung mit der ausgelieferten Software zusammen? Wo liegt die Ursache und wer ist verantwortlich? 
Der Ball könnte endlos zwischen Entwicklung und Betrieb hin- und hergespielt werden. 
Was zu einer großen Wahrscheinlichkeit auch noch zutrifft: Auf dem Entwicklungs-PC oder dem Testserver tritt das Problem natürlich nicht auf!


Als Entwicklerin kann ich von der Ferne und ohne nähere Kenntnisse des Betriebs in solchen Fällen nur sehr eingeschränkt helfen. 
Dann ist es ein bisschen so, wie wenn das eigene Kind das erste Mal alleine den Hang mit dem Schlitten runtersaust: 
man kann zurufen, ermutigen und Gebete sprechen, aber letztendlich kann man nicht mehr viel tun und muss seinen Sprössling dem Schicksal überlassen.
Zum Glück hatte ich nur in Ausnahmefällem mit Problemen zu tun, die bei der Software ausschließlich im Betrieb auftauchten. 

Dann kommt ein neues Projekt, ein Webprojekt, das sehr geprägt von der Infrastruktur der KundInnen und EndkundInnen ist. 
Nicht nur ist das Web nun ein völlig neues Feld, plötzlich ist es nicht mehr so einfach Softwareentwicklung und den Betrieb zu trennen. 
Schon zum Entwicklungszeitpunkt muss man sich so viele Gedanken über den Betrieb machen und Entscheidungen treffen. 
Als SoftwareentwicklerIn kann man aber doch keine Entscheidungen über den Betrieb treffen, oder doch? 
Immerhin will man der Firma, die die Software betreibt und sich viel besser auskennt auf dem Gebiet, nicht vorschreiben, wie die Software zu betreiben ist, oder doch? 
Wird das vielleicht sogar erwartet? Ist es nicht auch Aufgabe der Softwareentwicklungsfirma, die Software für die vorgegebene Zielplattform zu optimieren? 
Geben wir nun die Zielplattform vor? Wo ist denn die Grenze zwischen dem, was wir als SoftwareherstellerInnen an Vorgaben machen und dem, was der Betrieb entscheiden will und muss? 
Welche Security-Maßnahmen treffen wir, welche der Betrieb? Welche technischen Möglichkeiten haben wir denn überhaupt beim derzeitigen Betriebsmodell? 
Fragen über Fragen quälen den Kopf und letztendlich hilft nur eins: alle an einen Tisch. 
Entwicklung sowie Betrieb, um gemeinsam Rahmenbedingungen und Verantwortlichkeiten abzuklären und so die optimale Lösung zu finden. 
Das Ganze natürlich auch noch zu einem frühen Entwicklungszeitpunkt.

So ist die Erfahrung. 

Wie wird das heutzutage genannt? – „DevOps“.


## DevOps ist nicht neu, und schon gar kein „Hype“

Die inhaltliche und organisatorische Trennung zwischen Entwicklung und Betrieb war und ist Alltag in vielen Firmen. 
Wenn die Verantwortlichkeiten klar sind und praktikabel gelebt werden können, ist das auch eine gute Sache und der Vorteil liegt klar auf der Hand: Jede Organisation kann sich auf seine Kernkompetenzen konzentrieren. 
Genug Betriebe haben aber auch negative Erfahrungen gemacht. Grabenkämpfe zwischen Entwicklung und Betrieb sind keine Seltenheit und in Problemfällen kommt es schnell dazu, einen Schuldigen zu suchen. Der Betrieb ist unzufrieden mit der Software und der raren Installations- und Betriebsanleitung. Bei Problemen im laufenden Betrieb haben schnell mal die SoftwareentwicklerInnen schlampig gearbeitet und dass die EntwicklerInnen über die AdministratorInnen meckern, ist auch ganz klar. Diese betreiben die Software wieder ganz anders als die EntwicklerInnen das auf dem Testserver gemacht haben. 
Wenn dadurch die Probleme schwer zu finden sind und der Ball ständig zwischen Entwicklung und Betrieb hin- und her gespielt wird, gibt es letztendlich einen großen Verlierer: die Software und damit die EndkundInnen.


In Zeiten der Optimierung, Qualitäts- sowie Produktivitätssteigerung hat so etwas keinen Platz. Die Erkenntnis, dass jene, die den Code schreiben und jene, die den Code betreiben und Support leisten, intensiver zusammenarbeiten müssen, bekam bereits vor 10 Jahren mit *DevOps* einen Namen. Indem der Urvater der *DevOps*-Bewegung Patrick Dubois[^1] diesen Begriff prägte und es mit dem Start diverser DevOps-Konferenzen seit 2009 auch eine Bühne dafür gibt, wird der Scheinwerfer auf diese vor allem zwischenmenschlich geprägte Thematik geworfen.
DevOps ist aktueller denn je. Ein Blick in Magazine und Konferenzagenden reicht aus. Auch der aktuelle „14th Annual State of Agile“-Bericht[^2] demonstriert, wie weit das Thema vor allem in agil arbeitenden Unternehmen vorgedrungen ist:
>76% of respondents stated that they currently have a DevOps initiative in their organization or are planning one in the next 12 months (compared to 73% last year). 

Es ist klar erkennbar, dass es sich nicht um einen momentanen Hype handelt, der in Kürze Geschichte ist. Vielmehr handelt es sich um eine jahrelange Entwicklung, die durch *DevOps* erst einen Namen bekommen hat und damit in Organisationen diskutiert und fokussiert werden kann.

## Fazit
*DevOps* basiert auf der Erfahrung vieler Unternehmen, die Lösungen für Probleme suchen, die durch die strikte Trennung von Entwicklung und Betrieb entstehen. Meine eigene Erfahrung hat gezeigt, dass zum Entwicklungszeitpunkt bereits die richtigen Fragen zum Betrieb gestellt werden müssen, um stabile und gut betreibbare Software zu entwicklen. *DevOps* liefert dazu die notwendige Grundlage. Als ich zum ersten Mal davon hörte, konnte ich also mit gutem Gewissen sofort begeistert zustimmen, *DevOps* von Anfang an in neue Projekte zu integrieren. Was sich genau hinter *DevOps* verbirgt, ist [hier](/blog/was-ist-devops) zu finden.




[^1]: <https://www.heise.de/developer/artikel/10-Jahre-DevOps-Wie-gross-du-doch-geworden-bist-4595829.html?seite=all> 
[^2]: <https://stateofagile.com/#ufh-i-615706098-14th-annual-state-of-agile-report/7027494>


