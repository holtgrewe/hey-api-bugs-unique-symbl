First, install dependencies:

```
npm i
```

Then, run type checks:

```
npm run type-check
```

This will yield:

```
> mwe@1.0.0 type-check
> vue-tsc --noEmit --composite false

ext/varfish-api/src/lib/@tanstack/vue-query.gen.ts(84,14): error TS2527: The inferred type of 'casesAnalysisApiCaseanalysisListInfiniteOptions' references an inaccessible 'unique symbol' type. A type annotation is necessary.
ext/varfish-api/src/lib/@tanstack/vue-query.gen.ts(141,14): error TS2527: The inferred type of 'casesAnalysisApiCaseanalysissessionListInfiniteOptions' references an inaccessible 'unique symbol' type. A type annotation is necessary.
ext/varfish-api/src/lib/@tanstack/vue-query.gen.ts(198,14): error TS2527: The inferred type of 'casesImportApiCaseImportActionListInfiniteOptions' references an inaccessible 'unique symbol' type. A type annotation is necessary.
ext/varfish-api/src/lib/@tanstack/vue-query.gen.ts(514,14): error TS2527: The inferred type of 'casesApiCaseListListInfiniteOptions' references an inaccessible 'unique symbol' type. A type annotation is necessary.
ext/varfish-api/src/lib/@tanstack/vue-query.gen.ts(1251,14): error TS2527: The inferred type of 'seqvarsApiPredefinedqueryListInfiniteOptions' references an inaccessible 'unique symbol' type. A type annotation is necessary.
ext/varfish-api/src/lib/@tanstack/vue-query.gen.ts(1368,14): error TS2527: The inferred type of 'seqvarsApiQueryListInfiniteOptions' references an inaccessible 'unique symbol' type. A type annotation is necessary.
ext/varfish-api/src/lib/@tanstack/vue-query.gen.ts(1512,14): error TS2527: The inferred type of 'seqvarsApiQueryexecutionListInfiniteOptions' references an inaccessible 'unique symbol' type. A type annotation is necessary.
ext/varfish-api/src/lib/@tanstack/vue-query.gen.ts(1596,14): error TS2527: The inferred type of 'seqvarsApiQuerypresetsclinvarListInfiniteOptions' references an inaccessible 'unique symbol' type. A type annotation is necessary.
ext/varfish-api/src/lib/@tanstack/vue-query.gen.ts(1713,14): error TS2527: The inferred type of 'seqvarsApiQuerypresetscolumnsListInfiniteOptions' references an inaccessible 'unique symbol' type. A type annotation is necessary.
ext/varfish-api/src/lib/@tanstack/vue-query.gen.ts(1830,14): error TS2527: The inferred type of 'seqvarsApiQuerypresetsconsequenceListInfiniteOptions' references an inaccessible 'unique symbol' type. A type annotation is necessary.
ext/varfish-api/src/lib/@tanstack/vue-query.gen.ts(1947,14): error TS2527: The inferred type of 'seqvarsApiQuerypresetsfactorydefaultsListInfiniteOptions' references an inaccessible 'unique symbol' type. A type annotation is necessary.
ext/varfish-api/src/lib/@tanstack/vue-query.gen.ts(2004,14): error TS2527: The inferred type of 'seqvarsApiQuerypresetsfrequencyListInfiniteOptions' references an inaccessible 'unique symbol' type. A type annotation is necessary.
ext/varfish-api/src/lib/@tanstack/vue-query.gen.ts(2121,14): error TS2527: The inferred type of 'seqvarsApiQuerypresetslocusListInfiniteOptions' references an inaccessible 'unique symbol' type. A type annotation is necessary.
ext/varfish-api/src/lib/@tanstack/vue-query.gen.ts(2238,14): error TS2527: The inferred type of 'seqvarsApiQuerypresetsphenotypeprioListInfiniteOptions' references an inaccessible 'unique symbol' type. A type annotation is necessary.
ext/varfish-api/src/lib/@tanstack/vue-query.gen.ts(2355,14): error TS2527: The inferred type of 'seqvarsApiQuerypresetsqualityListInfiniteOptions' references an inaccessible 'unique symbol' type. A type annotation is necessary.
ext/varfish-api/src/lib/@tanstack/vue-query.gen.ts(2472,14): error TS2527: The inferred type of 'seqvarsApiQuerypresetssetListInfiniteOptions' references an inaccessible 'unique symbol' type. A type annotation is necessary.
ext/varfish-api/src/lib/@tanstack/vue-query.gen.ts(2616,14): error TS2527: The inferred type of 'seqvarsApiQuerypresetssetversionListInfiniteOptions' references an inaccessible 'unique symbol' type. A type annotation is necessary.
ext/varfish-api/src/lib/@tanstack/vue-query.gen.ts(2760,14): error TS2527: The inferred type of 'seqvarsApiQuerypresetsvariantprioListInfiniteOptions' references an inaccessible 'unique symbol' type. A type annotation is necessary.
ext/varfish-api/src/lib/@tanstack/vue-query.gen.ts(2877,14): error TS2527: The inferred type of 'seqvarsApiQuerysettingsListInfiniteOptions' references an inaccessible 'unique symbol' type. A type annotation is necessary.
ext/varfish-api/src/lib/@tanstack/vue-query.gen.ts(2994,14): error TS2527: The inferred type of 'seqvarsApiResultrowListInfiniteOptions' references an inaccessible 'unique symbol' type. A type annotation is necessary.
ext/varfish-api/src/lib/@tanstack/vue-query.gen.ts(3051,14): error TS2527: The inferred type of 'seqvarsApiResultsetListInfiniteOptions' references an inaccessible 'unique symbol' type. A type annotation is necessary.
```
