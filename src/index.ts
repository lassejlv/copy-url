import { PluginDefinition } from '@yaakapp/api'

export const plugin: PluginDefinition = {
  httpRequestActions: [
    {
      label: 'Copy Full URL',
      icon: 'copy',

      async onSelect(ctx, args) {
        const rendered_request = await ctx.httpRequest.render({ httpRequest: args.httpRequest, purpose: 'preview' })

        await ctx.clipboard.copyText(quote(rendered_request.url))

        await ctx.toast.show({
          color: 'success',
          message: `Copied Full URL to your clipboard!`,
        })
      },
    },
  ],
}

function quote(arg: string): string {
  const escaped = arg.replace(/'/g, "\\'")
  return `${escaped}`
}
