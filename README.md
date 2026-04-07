# David Rodriguez — Software Developer

Software developer with 5+ years building full-stack applications, APIs, and data pipelines that eliminate manual work and scale reliably. Delivered $80K in annual cost savings, 40% productivity gains, and near-zero failure rates across healthcare, aerospace, and real estate.

🌐 [davidr.io](https://davidr.io) | 💼 [LinkedIn](https://linkedin.com/in/drzengineer) | 📧 [hi@davidr.io](mailto:hi@davidr.io)

---

## Tech Stack

**Frontend:** ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black) ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white) ![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=flat&logo=svelte&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

**Languages:** ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) ![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white) ![T-SQL](https://img.shields.io/badge/T--SQL-CC2927?style=flat&logo=microsoftsqlserver&logoColor=white) ![C#](https://img.shields.io/badge/C%23-239120?style=flat&logo=csharp&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) ![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white)

**Backend & Data:** ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white) ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white) ![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=flat&logo=svelte&logoColor=white)  ![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white) ![Dagster](https://img.shields.io/badge/Dagster-FF6B6B?style=flat&logo=dagster&logoColor=white) ![REST APIs](https://img.shields.io/badge/REST%20APIs-FF6C37?style=flat&logo=postman&logoColor=white) ![dbt](https://img.shields.io/badge/dbt-FF694B?style=flat&logo=dbt&logoColor=white) 

**Databases:** ![SQL Server](https://img.shields.io/badge/SQL%20Server-CC2927?style=flat&logo=microsoftsqlserver&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white) ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white) ![pgvector](https://img.shields.io/badge/pgvector-4169E1?style=flat&logo=postgresql&logoColor=white) ![MongoDB Atlas](https://img.shields.io/badge/MongoDB%20Atlas-47A248?style=flat&logo=mongodb&logoColor=white) ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white)

**Cloud & DevOps:** ![AWS Amplify](https://img.shields.io/badge/AWS%20Amplify-FF9900?style=flat&logo=awsamplify&logoColor=white) ![AWS EC2](https://img.shields.io/badge/AWS%20EC2-FF9900?style=flat&logo=amazonec2&logoColor=white) ![Azure](https://img.shields.io/badge/Azure-0078D4?style=flat&logo=microsoftazure&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=flat&logo=githubactions&logoColor=white) ![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white) ![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black)

**AI / ML:** ![RAG](https://img.shields.io/badge/RAG-00ADD8?style=flat&logo=ai&logoColor=white) ![Vector Embeddings](https://img.shields.io/badge/Vector%20Embeddings-4169E1?style=flat&logo=postgresql&logoColor=white) ![Semantic Search](https://img.shields.io/badge/Semantic%20Search-220052?style=flat&logo=huggingface&logoColor=white)

**Testing:** ![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat&logo=playwright&logoColor=white) ![Jest](https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white) ![React Testing Library](https://img.shields.io/badge/React%20Testing%20Library-E33332?style=flat&logo=testinglibrary&logoColor=white)

---

## Featured Project

### World Baseball Classic Dashboard

**Full-stack data engineering + AI RAG platform**

End-to-end data pipeline and dashboard for WBC historical tournament data, built following
industry standard data engineering practices. Complete ELT pipeline, SQL transformations,
orchestration, vector embeddings, RAG natural language query interface, full-stack frontend.

- **ELT Architecture**: Python ingestion pipeline polling MLB Stats API, loading raw JSON
  directly into PostgreSQL; all transforms executed inside database via dbt
- **Database Design**: 5-layer architecture on Supabase PostgreSQL with raw landing zone,
  staging views, intermediate logic, analytics marts, and isolated pgvector HNSW indexing
- **Orchestration**: Dagster pipeline with software-defined assets, native dbt integration,
  and complete end-to-end data lineage tracking
- **RAG Pipeline**: Zero-dependency implementation with local vector embeddings, semantic
  similarity search, and streaming natural language responses
- **Context Rewriting**: Pre-search query contextualization that correctly resolves pronouns
  and maintains conversation state across follow up questions
- **SvelteKit Frontend**: Full dashboard with tournament brackets, standings, game browser,
  player leaderboards, player profiles, and integrated AI chat interface
- **Production Deployment**: Dockerized pipeline hosted on AWS EC2, SvelteKit frontend on
  Vercel, full CI/CD pipeline with automated data validation testing

**Stack:** Python · PostgreSQL · Supabase · pgvector · dbt · Dagster · SvelteKit · Tailwind CSS v4 · Docker · AWS EC2 · GitHub Actions

🔗 [Live Demo](https://wbc.davidr.io) | [Source](https://github.com/drzengineer/wbc-dashboard)

---

## Experience Highlights

- $80K annual cost savings via medical billing application
- 75% process acceleration through billing workflow automation
- 40% productivity increase via ETL pipeline engineering
- 5 hours daily time reduction through database optimization

---

Open to Software Developer opportunities — remote, hybrid, or on-site in the New York area.
