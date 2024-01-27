# Generative AI Infrastructure Landscape

This is a landscape of the infrastructure that powers the generative AI ecosystem. It is a work in progress, and we welcome contributions from the community.

## Add a new project

To add a new project, please open a pull request with your changes to the [data.yml](data.yml) file. The pull request should include a single line entry to the file, with the following format:

```yaml
  - category:
    name: Category Name
    subcategories:
      - subcategory:
        name: Subcategory Name
        items:
          - item:
          - item:
            crunchbase: https://www.crunchbase.com/organization/tensorchord
            description: Scalable Vector Search in Postgres. Revolutionize Vector Search, not Database.
            homepage_url: https://pgvecto.rs
            logo: pgvectors.svg
            name: pgvecto.rs
            project: opensource
            repo_url: https://github.com/tensorchord/pgvecto.rs
            twitter: https://twitter.com/tensorchord
```

The logo should be a SVG file, and should be placed in the `logos` directory. The logo should be named after the project, with all non-alphanumeric characters removed. For example, the logo for `pgvecto.rs` is named `pgvectors.svg`.

## Build the site

You do not need to build the site to add a new project. Only [`data.yml`](data.yml) and [`logos`](logos) need to be updated.

To build the site, you will need to have [our own langdscape2 fork](https://github.com/tensorchord/landscape2/) installed. Then, run the following commands:

```bash
landscape2 build --data-file data.yml --settings-file settings.yml --guide-file guide.yml --logos-path logos --output-dir build --cache-dir cache-dir
```

Then you could serve the site locally with:

```bash
landscape2 serve --landscape-dir build
```

## Acknowledgements

This landscape is based on the [CNCF Cloud Native Landscape2](https://github.com/cncf/landscape2)
