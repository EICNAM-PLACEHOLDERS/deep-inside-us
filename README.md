# deep-inside-us

# MONITORING

- Grafana : Grafana est une plateforme open-source de visualisation et de surveillance de données, très populaire pour la création de tableaux de bord interactifs. Elle permet de se connecter à diverses sources de données comme Prometheus, InfluxDB, Elasticsearch, etc. Son code source est disponible sous la licence Apache 2.0.

- Prometheus : Prometheus est également une solution open-source pour la collecte de métriques et leur stockage sous forme de séries temporelles. Il est utilisé principalement pour la surveillance des infrastructures et des applications. Son code source est disponible sous la licence Apache 2.0.

- Prometheus Node Exporter : Le Node Exporter est un outil open-source qui collecte des métriques sur les systèmes Linux, comme l'utilisation du CPU, de la mémoire, du disque, etc. Il est également sous licence Apache 2.0.

- NGINX Prometheus Exporter : Ce module open-source permet de collecter des métriques depuis un serveur NGINX. Comme les autres, son code est également sous la licence Apache 2.0.

# INSTALLATION ET LANCEMENT

Afin de lancer le monitoring et le projet vous pouvez utiliser :
`docker compose down -v && docker compose up -d`

L'application (Défi National) est accessible sur le port `81`
L'application de monitoring (Défi Supervision) est accessible sur le port `3000` (Grafana) et `9090` (Prometheus).
Il est recommandé d'utiliser Grafana plutôt que Prometheus, mais vous êtes libre de vous ballader !


# Connexion à Grafana
Nom d'utilisateur : `admin`
Mot de passe : `test`

