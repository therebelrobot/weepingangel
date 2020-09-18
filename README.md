# weepingangel
CLI for automated screenshot comparison, via Blink and Puppeteer

Based off the gist by @kfranqueiro for [automated screenshots](https://gist.github.com/kfranqueiro/399cb8f3271140c832da13ea5141212f)

### Installation

```shell
npm i -g weepingangel
```

### Usage

```shell
# in base branch
weepingangel base
# or
dontblink base
# or
wa base
# or
db base
```

```shell
# in compare branch
weepingangel compare
# or
dontblink compare
# or
wa compare
# or
db compare
```

```shell
# to generate diff image
weepingangel display [options]
# or
dontblink display [options]
# or
wa display [options]
# or
db display [options]
```

where `[options]` is:

|flag|use|default|
| -- | -- | -- |
|`--output <PATH>` or `-o <PATH>`|define output file location|`./comparison.png`|
|`--overwrite`|force overwrite if file already exists|`false`|

### Development
- clone
- `yarn install`
- `npm link --local`