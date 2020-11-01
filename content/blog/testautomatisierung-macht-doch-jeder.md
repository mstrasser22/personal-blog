---
title: "Testautomatisierung macht doch jeder?"
date: 2020-08-30T18:54:21+02:00
draft: false

# post thumb
image: "images/blog/test_manuell.jpg"

# meta description
description: "Artikel über den Sinn und Zweck von Testautomatisierung"

# taxonomies
categories: 
  - "Testautomatisierung"
tags:
  - "DevOps"
  - "Testautomatisierung"
  - "Unit Test"

# post type
type: "featured"
---

Nachdem mein Mann schon angekündigt hat, dass der nächste Artikel über *Testautomatisierung* ist, widme ich mich heute einem meiner Lieblingsthemen. 
Ähnlich wie beim Thema DevOps geht es mir aber so, dass ich einen Artikel darüber schreiben möchte, jedoch feststelle, dass das Thema sehr umfangreich ist. Darum wird es wohl eher eine Artikel-Serie geben. Ich starte damit, anhand von Praxisbeispielen zu erarbeiten,  WARUM aus meiner Sicht *Testautomatisierung* wichtig ist.

### Eine Liebesgeschichte
Ich kam mit *Testautomatisierung* schon sehr früh in Berührung. Damals (vor ca. 12 Jahren) war die Thematik noch sehr jung. Im Zuge meines HTL-Berufspraktikums durfte ich eine Bibliothek schreiben, die es erleichtern sollte, Winforms-Komponenten automatisiert zu testen. Bis dahin hatte ich keine Ahnung, dass es sowas wie automatisierte Tests überhaupt gibt. Während meiner Schulausbildung wurde noch kein Wort darüber verloren, und auch in meinem IT-Bekanntenkreis gab es kaum jemanden, der/die sich intensiver mit Unit-Tests, Integrationstests oder UI-Tests beschäftigte.

Durch die intensive Auseinandersetzung mit *Testautomatisierung* im Zuge der darauffolgenden Diplomarbeit, wurde mir bewusst, wie wichtig es ist, diesem Thema Aufmerksamkeit zu schenken. So blieb ein Teil meines Softwareentwicklerinnenherzens bei diesem Themenfeld hängen. Heute ist *Testautomatisierung* aktueller denn je, vor allem in agilen Projekten.

### Definition
*Testautomatisierung* umfasst alle Tätigkeiten, die dafür sorgen, **manuelle Testaufwände in Softwareprojekten zu reduzieren, gleichzeitig jedoch eine hohe Softwarequalität trotz ständiger Weiterentwicklung sicherzustellen**.
Im Wesentlichen geht es darum, Tests durch den Einsatz verschiedenster Techniken und Tools zu erstellen, um diese jederzeit automatisiert durchführen zu können. Dabei umfasst *Testautomatisierung*, neben der Erstellung der Tests, auch eine strategische Ebene, die Ziele und Rahmenbedingungen festlegt. 
- Welche Qualitätsansprüche hat das Projekt? 
- Welche Typen von Tests werden in welchem Ausmaß erstellt? 
- Welche Testabdeckung wird angestrebt?
- Welche Ressourcen werden dafür eingesetzt? 

Für diese Entscheidungen ist es notwendig, die unterschiedlichen Typen automatisierter Tests, deren Entwicklungsaufwand sowie sinnvoller Verteilung zu kennen. Das wird üblicherweise mit der *Test-Pyramide* [^1]  visualisiert. 

### Testautomatisierung - eine Selbstverständlichkeit?
Im Zuge neuer Projekte beschäftige ich mich derzeit intensiv mit der Qualitätssicherung der Software. Eine wichtige Säule ist hier die *Testautomatisierung* auf den verschiedensten Ebenen: Unit-Tests, Integrationstests, UI-Tests, Last- und Performancetests sowie Security-Tests. Einige dieser Arten stellen für mich noch Neuland dar, manche passen auch nicht für jedes Projekt, und über manche denke ich gar nicht mehr nach, so zum Beispiel über Unit-Tests. Für mich ist es selbstverständlich, dass jede Funktionalität *mindestens* mit Unit-Tests getestet wird. Wenn ich aber über die Grenzen meiner rosaroten kleinen Welt hinausschaue, und im Austausch mit anderen Projekten bin, fällt mir doch eines auf: *Testautomatisierung* ist noch NICHT überall angekommen und so selbstverständlich in die tägliche Arbeit eingebettet, wie ich das angenommen hätte!

In Gesprächen über Projekte ohne automatisierte Tests versuche ich nach außen hin verständnisvoll und sachlich zu bleiben. Innerlich verfalle ich aber in einen kompletten Panikmodus. Für mich persönlich wäre es undenkbar, geschäftskritische Lösungen ohne automatisierte Tests zu entwickeln und auszurollen. Klar, vor Releases kann man genug Zeit für manuelle Tests einplanen. Die Realität sieht jedoch anders aus, und so gibt es auch Situationen, wo die Zeit, alles durchzuklicken, eben nicht bleibt. Seiteneffekte sind hierbei vorprogrammiert.
Die Erkenntnis, dass die Automatisierung von Tests in manchen Softwareprojekten noch keine Rolle spielt, macht mich sehr nachdenklich. Darum möchte ich anhand meiner konkreten Projekterfahrungen zeigen, warum automatisierte Tests für mich nicht mehr wegzudenken sind.

### Kontinuierliche Weiterentwicklung bedingt Testautomatisierung
Die Vorteile der *Testautomatisierung* lassen sich am besten anhand von Beispielen aus der Praxis verdeutlichen. Vor 10 Jahren begann ich bei einer Neuentwicklung eines großen Softwareprojekts mitzuwirken, an dem noch heute intensiv weiterentwickelt wird. Von Beginn an wurden Unit-Tests erstellt, und diese automatisiert im Zuge des nächtlichen Build-Prozesses ausgeführt. 
Zugegeben, es war oftmals echt eine Überwindung genug Zeit und Motivation zu finden, umfangreiche Unit-Tests zu schreiben. Über die Jahre sind die Vorteile jedoch klar erkennbar geworden:

- Die tägliche automatisierte Ausführung von tausenden von Unit-Tests gibt den EntwicklerInnen spätestens am nächsten Tag **unmittelbar Rückmeldung, ob eine Änderung Seiteneffekte hat**.
- Der Umfang an Funktionalität in diesem Projekt und die Release-Zyklen von monatlichen Sprint-Releases bzw. wöchentliche Patches würden es unmöglich machen, alles so oft händisch zu testen. **Häufige Software-Releases bedingen Testautomatisierung**.
- Habe ich aufgrund von Zeitmangel darauf verzichtet, für ein Feature Tests zu schreiben, wurden ziemlich sicher genau dafür kurze Zeit später Bugs eingemeldet. Die Erstellung von Unit-Tests bedingt eine **intensive Analyse der Fehlerfälle**. Diese Tatsache alleine genügt schon, um vielen Fehlern vor der Auslieferung **vorzubeugen**.
- **Änderungen von Kernfunktionalitäten** können relativ entspannt durchgeführt werden. "Never touch a running system" wird damit hinfällig, denn aufgrund der hohen Testabdeckung würden Seiteneffekte mit hoher Wahrscheinlichkeit von einem Test entdeckt werden.  
- Das erste große Endkunden-Release nach einigen Jahren Entwicklung ist sehr gut verlaufen, nur wenige wirklich kritische Fehler sind aufgetreten. Somit war es nicht notwendig, lange Zeiten der Korrektur und Nacharbeit einzuplanen, sondern konnte **sofort mit der Entwicklung neuer Features fortgesetzt** werden.
- Als ich in Karenz ging, übernahmen KollegInnen "meinen" Bereich, der doch sehr viel Kernfunktionalität beinhaltete. Bei der **Übernahme von Code zur Wartung und Weiterentwicklung durch andere MitarbeiterInnen** stellen Tests sicher, dass bestehende Funktionalität nicht beeinträchtigt wird (und sich die Person, die den Code nun wartet und Änderungen vornehmen muss, etwas entspannen kann…).
- Vor einigen Jahren wurde damit begonnen, aufgrund gravierender gesetzlicher Änderungen die Software anzupassen, und es musste dazu **Kernfunktionalität sehr tiefgreifend verändert werden**. Ich habe die Projektleiterin gefragt, wie dieser Umbau wohl gelaufen wäre, ohne die vielen tausenden Tests, die über die Jahre entstanden sind. Die Antwort war kurz, aber für mich sehr aussagekräftig "Das möchte ich mir gar nicht vorstellen...!".
 
Diese Erfahrungen haben mich sehr geprägt und sind die Antwort darauf, warum ich *Testautomatisierung* als Selbstverständlichkeit ansehe. Mit [DevOps](/blog/was-ist-devops) bekommt die Thematik sogar noch einen viel höheren Stellenwert, denn kontinuierliche Weiterentwicklung und häufige Releases qualitativ hochwertiger Software sind nur mit einem hohen (Test-)Automatisierungsgrad möglich.

### Fazit
*Testautomatisierung* ist für mich die Voraussetzung dafür, geschäftskritische Applikationen über einen längeren Zeitraum mit guter Qualität entwickeln und warten zu können. Viele Fehler und Seiteneffekte können frühzeitig erkannt werden, bevor sie zu den KundInnen gelangen. Übergabe von Wartungsprojekten und Code an andere MitarbeiterInnen sowie häufige Releases werden durch automatisierte Tests erheblich erleichtert. 
Trotz der Vorteile bekommt das Thema noch nicht in allen Projekten einen fixen Platz. Was braucht es also, um *Testautomatisierung* in Softwareprojekten zu etablieren? Dieser Frage werde ich in einem Folgeartikel auf den Grund gehen.

[^1]: <https://www.borisgloger.com/blog/2018/07/11/agiles-testen-mehr-effizienz-durch-die-testpyramide/>
